import {IQuestionsList} from '../../../types/IQuestionsList';
import {ReactQuestionsList} from '../../../questions/ReactQuestionsList';
import {ReduxQuestionsList} from '../../../questions/ReduxQuestionsList';
import {IQuestionsTheme} from '../../../types/IQuestionsThem';
import {IQuestion} from '../../../types/IQuestion';
import {TypeScriptQuestionsList} from '../../../questions/TypeScriptQuestionsList';
import {JavaScriptQuestionsList} from '../../../questions/JavaScriptQuestionsList';

export const initQuestions = (): IQuestionsList => {
    const questionList: IQuestionsList = {
        themes: [
            ...ReactQuestionsList.themes,
            ...ReduxQuestionsList.themes,
            ...TypeScriptQuestionsList.themes,
            ...JavaScriptQuestionsList.themes
        ]
    };

    questionList.themes.forEach((theme: IQuestionsTheme, themeIndex: number) => {
        theme.id = themeIndex + '';

        theme.questions.forEach((question: IQuestion, questionIndex) => {
            question.id = themeIndex + '.' + questionIndex;
        });
    });

    return questionList;
};
