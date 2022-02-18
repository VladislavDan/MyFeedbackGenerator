import {IThemeGrade} from './IThemGrade';
import {IQuestion} from './IQuestion';

export interface IQuestionsTheme {
    id: string,
    name: string
    questions: IQuestion[]
    grade: IThemeGrade
}
