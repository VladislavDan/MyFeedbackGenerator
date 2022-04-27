import {IQuestionsList} from "../types/IQuestionsList";
import {IThemeGrade} from "../types/IThemGrade";
import {IQuestionLevel} from "../types/IQuestionLevel";
import {IQuestionGrade} from "../types/IQuestionGrade";

export const RxJSQuestionList: IQuestionsList = {
    themes: [
        {
            id: '1',
            name: 'React',
            grade: IThemeGrade.NONE,
            questions: [
                {
                    id: '1.1',
                    level: IQuestionLevel.FIRST,
                    question: 'JSX',
                    theme: 'JSX',
                    grade: IQuestionGrade.NONE,
                    suggestion: '',
                },
            ]
        }
    ]
}