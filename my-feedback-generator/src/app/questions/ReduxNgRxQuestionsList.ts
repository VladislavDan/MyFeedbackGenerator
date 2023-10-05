import {IQuestionsList} from '../types/IQuestionsList';
import {IThemeGrade} from '../types/IThemGrade';
import {IQuestionGrade} from '../types/IQuestionGrade';
import {IQuestionLevel} from '../types/IQuestionLevel';

export const ReduxNgRxQuestionsList: IQuestionsList = {
    themes: [
        {
            id: '2',
            name: 'Redux',
            grade: IThemeGrade.NONE,
            questions: [
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: '3 принцыпа Redux',
                    theme: '3 принцыпа Redux',
                    suggestion: '3 принцыпа Redux (https://redux.js.org/understanding/thinking-in-redux/three-principles)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.FIRST,
                    question: 'action',
                    theme: 'action',
                    suggestion: 'action',
                    grade: IQuestionGrade.NONE
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.FIRST,
                    question: 'middleware',
                    theme: 'middleware',
                    suggestion: 'middleware',
                    grade: IQuestionGrade.NONE
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.FIRST,
                    question: 'reducer',
                    theme: 'reducer',
                    suggestion: 'reducer',
                    grade: IQuestionGrade.NONE
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.SECOND,
                    question: 'pure function',
                    theme: 'pure function',
                    suggestion: 'pure function',
                    grade: IQuestionGrade.NONE
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.FIRST,
                    question: 'store',
                    theme: 'store',
                    suggestion: 'store',
                    grade: IQuestionGrade.NONE
                },
            ]
        }
    ]
};
