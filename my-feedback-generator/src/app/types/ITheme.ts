import {ISubThemeQuestions} from './ISubThemeQuestions';

export interface ITheme {
    themeName: string
    questions: Array<ISubThemeQuestions>
}
