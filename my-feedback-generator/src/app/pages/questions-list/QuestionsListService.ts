import {StorageService} from '../../common/services/StorageService';
import {Channel} from '../../common/Channel';
import {IQuestionsList} from '../../types/IQuestionsList';
import {map, switchMap, tap} from 'rxjs/operators';
import {IQuestionGrade} from '../../types/IQuestionGrade';
import {IThemeGrade} from '../../types/IThemGrade';
import {changeQuestionGrade} from './logic/changeQuestionGrade';
import {changeThemeGrade} from './logic/changeThemeGrade';
import {initQuestions} from './logic/initQuestions';

export class QuestionsListService {

    private questionsList = initQuestions();

    public questionListChannel: Channel<string, IQuestionsList>;
    public changeThemeGradeChannel: Channel<{ grade: IThemeGrade, id: string }, IQuestionsList>;
    public changeQuestionGradeChannel: Channel<{ grade: IQuestionGrade, id: string }, IQuestionsList>;

    constructor(private storageService: StorageService) {

        this.questionListChannel = new Channel(() => storageService.getBackup().pipe(
            switchMap((questionsList: IQuestionsList) => {
                if (!questionsList || Array.isArray(questionsList)) {
                    storageService.setBackup(this.questionsList);
                    return storageService.getBackup();
                }
                return storageService.getBackup();
            })
        ));

        this.changeQuestionGradeChannel = new Channel(({grade, id}) => this.storageService.getBackup().pipe(
            map((questionsList: IQuestionsList) => {
                return changeQuestionGrade(questionsList, id, grade);
            }),
            tap((questionsList: IQuestionsList) => {
                storageService.setBackup(questionsList)
            })
        ));

        this.changeThemeGradeChannel = new Channel(({grade, id}) => this.storageService.getBackup().pipe(
            map((questionsList: IQuestionsList) => {
                return changeThemeGrade(questionsList, id, grade);
            }),
            tap((questionsList: IQuestionsList) => {
                storageService.setBackup(questionsList)
            })
        ));
    }
}
