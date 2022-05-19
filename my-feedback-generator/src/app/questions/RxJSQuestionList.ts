import {IQuestionsList} from "../types/IQuestionsList";
import {IThemeGrade} from "../types/IThemGrade";
import {IQuestionLevel} from "../types/IQuestionLevel";
import {IQuestionGrade} from "../types/IQuestionGrade";

export const RxJSQuestionList: IQuestionsList = {
    themes: [
        {
            id: '1',
            name: 'RxJS',
            grade: IThemeGrade.NONE,
            questions: [
                {
                    id: '1.1',
                    level: IQuestionLevel.FIRST,
                    question: 'ReplaySubject vs BehaviourSubject',
                    theme: 'ReplaySubject vs BehaviourSubject',
                    grade: IQuestionGrade.NONE,
                    suggestion: 'ReplaySubject vs BehaviourSubject',
                },
                {
                    id: '1.1',
                    level: IQuestionLevel.FIRST,
                    question: 'cold observable vs hot observable',
                    theme: 'cold observable vs hot observable',
                    grade: IQuestionGrade.NONE,
                    suggestion: 'cold observable vs hot observable',
                },
            ]
        }
    ]
}