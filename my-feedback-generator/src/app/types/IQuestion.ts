import {IGrade} from './IGrade';

export interface IQuestion {
    question: string
    comment: string
    grade: IGrade
    textInFeedback: string
}
