import {Routs} from '../../common/Routs';
import {Channel} from '../../common/Channel';
import {IQuestionsList} from '../../types/IQuestionsList';
import {StorageService} from '../../common/services/StorageService';
import {map, tap} from 'rxjs/operators';
import {IQuestionsTheme} from '../../types/IQuestionsThem';
import {saveTextInFile} from '../../common/logic/saveTextInFile';
import {IQuestion} from '../../types/IQuestion';
import {IThemeGrade} from '../../types/IThemGrade';
import {IQuestionGrade} from '../../types/IQuestionGrade';
import {IQuestionLevel} from '../../types/IQuestionLevel';

export class ToolbarService {

    public generateFeedbackChannel: Channel<string, string>;

    constructor(storageService: StorageService) {
        this.generateFeedbackChannel = new Channel(() => storageService.getBackup().pipe(
            map((questionsList: IQuestionsList) => {
                return this.getFeedbackText(questionsList);
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

    getFeedbackText(questionsList: IQuestionsList): string {

        let skillsPart = 'Checked skills (grades: poor, avg, good):\n\n';

        let suggestionsPart = 'It would be great if you fixed next gaps: \n\n';

        questionsList.themes.forEach((theme: IQuestionsTheme, index) => {

            if (theme.grade !== IThemeGrade.NONE) {
                skillsPart = skillsPart + `${theme.name} (${theme.grade})\n\n`;

                theme.questions.forEach((question: IQuestion) => {

                    if (question.grade !== IQuestionGrade.NONE) {

                        if (question.level === IQuestionLevel.FIRST) {
                            skillsPart = skillsPart + `    (${question.grade}) ${question.question}\n`;
                        } else if (question.level === IQuestionLevel.SECOND) {
                            skillsPart = skillsPart + `        (${question.grade}) ${question.question}\n`;
                        } else {
                            skillsPart = skillsPart + `            (${question.grade}) ${question.question}\n`;
                        }
                    }
                });

                skillsPart = skillsPart + `\n`;
            }

            if (theme.grade !== IThemeGrade.NONE) {

                const hasMinusQuestion = theme.questions.findIndex((question: IQuestion) => {
                    return question.grade === IQuestionGrade.MINUS || question.grade === IQuestionGrade.PLUS_MINUS
                }) > -1;

                if (hasMinusQuestion) {
                    suggestionsPart = suggestionsPart + `${index + 1}) ${theme.name}\n\n`;

                    theme.questions.forEach((question: IQuestion) => {

                        if (question.grade !== IQuestionGrade.NONE) {
                            if (question.grade !== IQuestionGrade.PLUS) {
                                suggestionsPart = suggestionsPart + ` • ${question.suggestion}\n`
                            }
                        }
                    });
                    suggestionsPart = suggestionsPart + `\n`
                }
            }

        });


        return skillsPart + suggestionsPart;
    }
}
