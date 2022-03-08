import {IQuestionsList} from '../types/IQuestionsList';
import {IThemeGrade} from '../types/IThemGrade';
import {IQuestionGrade} from '../types/IQuestionGrade';
import {IQuestionLevel} from '../types/IQuestionLevel';

export const HTMLQuestionsList: IQuestionsList = {
    themes: [
        {
            id: '2',
            name: 'HTML',
            grade: IThemeGrade.NONE,
            questions: [
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Semantic tags',
                    suggestion: 'Semantic tags',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Data-attributes',
                    suggestion: 'Data-attributes',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'using data attributes element.dataset',
                    suggestion: 'using data attributes element.dataset',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Critical rendering path ',
                    suggestion: 'Critical rendering path (https://developers.google.com/web/fundamentals/performance/critical-rendering-path?hl=ru)',
                    grade: IQuestionGrade.NONE,
                },
            ]
        }
    ]
};
