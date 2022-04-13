import {IQuestionGrade} from './IQuestionGrade';
import {IQuestionLevel} from './IQuestionLevel';

export interface IQuestion {
    id: string
    question: string
    theme: string
    suggestion: string
    grade: IQuestionGrade
    level: IQuestionLevel
}
