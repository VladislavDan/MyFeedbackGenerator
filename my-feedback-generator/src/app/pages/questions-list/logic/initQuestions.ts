import {IQuestionsList} from '../../../types/IQuestionsList';
import {ReactQuestionsList} from '../../../questions/ReactQuestionsList';
import {ReduxNgRxQuestionsList} from '../../../questions/ReduxNgRxQuestionsList';
import {IQuestionsTheme} from '../../../types/IQuestionsThem';
import {IQuestion} from '../../../types/IQuestion';
import {TypeScriptQuestionsList} from '../../../questions/TypeScriptQuestionsList';
import {JavaScriptQuestionsList} from '../../../questions/JavaScriptQuestionsList';
import {HTMLQuestionsList} from '../../../questions/HTMLQuestionsList';
import {CSSQuestionsList} from '../../../questions/CSSQuestionsList';
import {SoftSkillsQuestionList} from "../../../questions/SoftSkillsQuestionList";

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
            ...SoftSkillsQuestionList.themes,
            ...ReactQuestionsList.themes,
            ...TypeScriptQuestionsList.themes,
            ...JavaScriptQuestionsList.themes,
            ...HTMLQuestionsList.themes,
            ...CSSQuestionsList.themes,
            ...ReduxNgRxQuestionsList.themes,
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
