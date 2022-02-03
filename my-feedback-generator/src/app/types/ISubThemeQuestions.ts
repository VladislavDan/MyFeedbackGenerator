import {IQuestion} from './IQuestion';

export interface ISubThemeQuestions {
    commonQuestion: IQuestion
    level1Questions: Array<IQuestion>
    level2Questions: Array<IQuestion>
    level3Questions: Array<IQuestion>
}
