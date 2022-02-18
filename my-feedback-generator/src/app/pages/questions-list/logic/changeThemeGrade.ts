import {IQuestionsList} from '../../../types/IQuestionsList';
import {IQuestionsTheme} from '../../../types/IQuestionsThem';
import {IThemeGrade} from '../../../types/IThemGrade';

export const changeThemeGrade = (questionsList: IQuestionsList, id: string, grade: IThemeGrade) => {
    questionsList.themes.forEach((theme: IQuestionsTheme) => {
        if (theme.id === id) {
            theme.grade = grade;
        }
    });
    return questionsList;
};
