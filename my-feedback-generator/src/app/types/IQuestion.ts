import {IQuestionGrade} from './IQuestionGrade';
import {IQuestionLevel} from './IQuestionLevel';

export interface IQuestion {
    id: string
    question: string
    suggestion: string
    grade: IQuestionGrade
    level: IQuestionLevel
}
