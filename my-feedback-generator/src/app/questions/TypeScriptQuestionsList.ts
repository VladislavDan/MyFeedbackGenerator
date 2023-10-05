import {IQuestionsList} from '../types/IQuestionsList';
import {IThemeGrade} from '../types/IThemGrade';
import {IQuestionGrade} from '../types/IQuestionGrade';
import {IQuestionLevel} from '../types/IQuestionLevel';

export const TypeScriptQuestionsList: IQuestionsList = {
    themes: [
        {
            id: '2',
            name: 'TypeScript',
            grade: IThemeGrade.NONE,
            questions: [
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Дженерики',
                    theme: 'Дженерики',
                    suggestion: 'Дженерики',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Модификаторы доступа',
                    theme: 'Модификаторы доступа',
                    suggestion: 'Модификаторы доступа',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'protected vs private',
                    theme: 'protected vs private',
                    suggestion: 'protected vs private',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'read only vs const',
                    theme: 'read only vs const',
                    suggestion: 'read only vs const',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'static',
                    theme: 'static',
                    suggestion: 'static',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Decorator',
                    theme: 'Decorator',
                    suggestion: 'Decorator',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'реализация',
                    theme: 'реализация',
                    suggestion: "реализация Decorator",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Implements vs extends',
                    theme: 'Implements vs extends',
                    suggestion: "Implements vs extends",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'abstract',
                    theme: 'abstract',
                    suggestion: "abstract",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'keyOf',
                    theme: 'keyOf',
                    suggestion: "keyOf",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'enum',
                    theme: 'enum',
                    suggestion: "enum",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'значения по умолчанию',
                    theme: 'значения по умолчанию',
                    suggestion: "enum значения по умолчанию",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Type guards',
                    theme: 'Type guards',
                    suggestion: "Type guards (https://www.typescriptlang.org/docs/handbook/advanced-types.html)",
                    grade: IQuestionGrade.NONE,
                },
            ]
        }
    ]
};
