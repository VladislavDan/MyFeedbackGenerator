import {IQuestionsList} from '../types/IQuestionsList';
import {IThemeGrade} from '../types/IThemGrade';
import {IQuestionGrade} from '../types/IQuestionGrade';
import {IQuestionLevel} from '../types/IQuestionLevel';

export const ReduxQuestionsList: IQuestionsList = {
    themes: [
        {
            id: '2',
            name: 'Redux',
            grade: IThemeGrade.NONE,
            questions: [
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: '3 principles of Redux',
                    suggestion: '3 principles of Redux (https://redux.js.org/understanding/thinking-in-redux/three-principles)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.FIRST,
                    question: 'action',
                    suggestion: 'action',
                    grade: IQuestionGrade.NONE
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.FIRST,
                    question: 'middleware',
                    suggestion: 'middleware',
                    grade: IQuestionGrade.NONE
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.FIRST,
                    question: 'reducer',
                    suggestion: 'reducer',
                    grade: IQuestionGrade.NONE
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.SECOND,
                    question: 'pure function',
                    suggestion: 'pure function',
                    grade: IQuestionGrade.NONE
                },
                {
                    id: '2.2',
                    level: IQuestionLevel.FIRST,
                    question: 'store',
                    suggestion: 'store',
                    grade: IQuestionGrade.NONE
                },
            ]
        }
    ]
};