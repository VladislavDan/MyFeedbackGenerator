import {IQuestionsList} from '../../../types/IQuestionsList';
import {ReactQuestionsList} from '../../../questions/ReactQuestionsList';
import {ReduxQuestionsList} from '../../../questions/ReduxQuestionsList';
import {IQuestionsTheme} from '../../../types/IQuestionsThem';
import {IQuestion} from '../../../types/IQuestion';
import {TypeScriptQuestionsList} from '../../../questions/TypeScriptQuestionsList';
import {JavaScriptQuestionsList} from '../../../questions/JavaScriptQuestionsList';
import {HTMLQuestionsList} from '../../../questions/HTMLQuestionsList';
import {CSSQuestionsList} from '../../../questions/CSSQuestionsList';

export const initQuestions = (): IQuestionsList => {
    const questionList: IQuestionsList = {
        actualLevel: '',
        english: '',
        wouldWorkWithCandidate: '',
        vectorOfDevelopment: '',
        personalImpression: '',
        experience: '',
        technologies: '',
        restrictions: '',
        priorities: '',
        studies: '',
        motivationWorkingForCompany: '',
        themes: [
            ...ReactQuestionsList.themes,
            ...ReduxQuestionsList.themes,
            ...TypeScriptQuestionsList.themes,
            ...JavaScriptQuestionsList.themes,
            ...HTMLQuestionsList.themes,
            ...CSSQuestionsList.themes
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
