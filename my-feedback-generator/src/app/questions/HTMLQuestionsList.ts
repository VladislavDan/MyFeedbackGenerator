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
                    question: 'Семантические тэги',
                    theme: 'Семантические тэги',
                    suggestion: 'Семантические тэги',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Data-атрибуты',
                    theme: 'Data-атрибуты',
                    suggestion: 'Data-атрибуты',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'использование data-атрибутов: element.dataset',
                    theme: 'использование data-атрибутов: element.dataset',
                    suggestion: 'использование data-атрибутов: element.dataset',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Critical rendering path ',
                    theme: 'Critical rendering path ',
                    suggestion: 'Critical rendering path (https://developers.google.com/web/fundamentals/performance/critical-rendering-path?hl=ru)',
                    grade: IQuestionGrade.NONE,
                },
            ]
        }
    ]
};
