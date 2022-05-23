import {Routs} from '../../common/Routs';
import {IQuestionsList} from '../../types/IQuestionsList';
import {StorageService} from '../../common/services/StorageService';
import {map, tap} from 'rxjs/operators';
import {saveTextInFile} from '../../common/logic/saveTextInFile';
import {getFeedbackText} from "./logic/getFeedbackText";
import {Channel} from "../../../MyTools/channel-conception/Channel";

export class ToolbarService {

    public generateFeedbackChannel: Channel<string, string>;

    constructor(storageService: StorageService) {
        this.generateFeedbackChannel = new Channel(() => storageService.getBackup().pipe(
            map((questionsList: IQuestionsList) => {
                return getFeedbackText(questionsList);
            }),
            tap((feedbackText) => {
                saveTextInFile(feedbackText);
            })
        ))
    }

    public getPageLabel(path: string) {

        if (path === Routs.questionLists.path) {
            return Routs.questionLists.name;
        }

        if (path === Routs.googleAuth.path) {
            return Routs.googleAuth.name;
        }

        if (path === Routs.googleBackups.path) {
            return Routs.googleBackups.name;
        }

        if (path === Routs.localBackups.path) {
            return Routs.localBackups.name;
        }

        if (path === Routs.settings.path) {
            return Routs.settings.name;
        }

        return 'My Feedback'
    }
}
