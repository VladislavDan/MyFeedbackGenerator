import {IQuestionsList} from '../../../types/IQuestionsList';
import {IQuestionsTheme} from '../../../types/IQuestionsThem';
import {IQuestion} from '../../../types/IQuestion';
import {IQuestionGrade} from '../../../types/IQuestionGrade';

export const changeQuestionGrade = (questionsList: IQuestionsList, id: string, grade: IQuestionGrade) => {
    questionsList.themes.forEach((theme: IQuestionsTheme) => {

        theme.questions.forEach((question: IQuestion) => {
            if (question.id === id) {
                question.grade = grade;
            }
        })

    });
    return questionsList;
};
