import {IQuestionsList} from '../types/IQuestionsList';
import {IThemeGrade} from '../types/IThemGrade';
import {IQuestionGrade} from '../types/IQuestionGrade';
import {IQuestionLevel} from '../types/IQuestionLevel';

export const JavaScriptQuestionsList: IQuestionsList = {
    themes: [
        {
            id: '2',
            name: 'JavaScript',
            grade: IThemeGrade.NONE,
            questions: [
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Event-loop',
                    theme: 'Event-loop',
                    suggestion: 'Event-loop',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'structure',
                    theme: 'structure',
                    suggestion: 'Event-loop structure',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'micro-tasks and macro-tasks',
                    theme: 'micro-tasks and macro-tasks',
                    suggestion: 'micro-tasks and macro-tasks',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'callback for user actions',
                    theme: 'callback for user actions',
                    suggestion: 'asynchronous of callback for user actions',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'ES6+ features',
                    theme: 'ES6+ features',
                    suggestion: 'ES6+ features',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'spread operator',
                    theme: 'spread operator',
                    suggestion: 'spread operator',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'generator',
                    theme: 'generator',
                    suggestion: 'generator (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Generator)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'async/await',
                    theme: 'async/await',
                    suggestion: 'async/await',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'var vs let vs const',
                    theme: 'var vs let vs const',
                    suggestion: 'var vs let vs const',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.THIRD,
                    question: 'var scope vs let scope',
                    theme: 'var scope vs let scope',
                    suggestion: 'var scope vs let scope',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Hoisting',
                    theme: 'Hoisting',
                    suggestion: 'Hoisting',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Closure',
                    theme: 'Closure',
                    suggestion: 'Closure',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Data types',
                    theme: 'Data types',
                    suggestion: 'Data types',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'Symbol',
                    theme: 'Symbol',
                    suggestion: 'Symbol',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'null vs undefined',
                    theme: 'null vs undefined',
                    suggestion: 'null vs undefined',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'Primitive Wrapper Types',
                    theme: 'Primitive Wrapper Types',
                    suggestion: 'Primitive Wrapper Types',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Function',
                    theme: 'Function',
                    suggestion: 'Function',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'IIFE - Immediately Invoked Function Expression',
                    theme: 'IIFE - Immediately Invoked Function Expression',
                    suggestion: 'IIFE - Immediately Invoked Function Expression',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'Arrow function vs Function Expression',
                    theme: 'Arrow function vs Function Expression',
                    suggestion: 'Arrow function vs Function Expression',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Context',
                    theme: 'Context',
                    suggestion: 'Context',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'bind, call, apply',
                    theme: 'bind, call, apply',
                    suggestion: 'bind, call, apply',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'loosing context',
                    theme: 'loosing context',
                    suggestion: 'loosing context',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Promise',
                    theme: 'Promise',
                    suggestion: 'Promise',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'Promise.all',
                    theme: 'Promise.all',
                    suggestion: 'Promise.all',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'Promise.race',
                    theme: 'Promise.race',
                    suggestion: 'Promise.race',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'fetch',
                    theme: 'fetch',
                    suggestion: 'fetch',
                    grade: IQuestionGrade.NONE,
                },
            ]
        }
    ]
};
