import {IQuestionsList} from '../types/IQuestionsList';
import {IThemeGrade} from '../types/IThemGrade';
import {IQuestionGrade} from '../types/IQuestionGrade';
import {IQuestionLevel} from '../types/IQuestionLevel';

export const ReactQuestionsList: IQuestionsList = {
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
                    grade: IQuestionGrade.NONE,
                    suggestion: '',
                },
                {
                    id: '1.2',
                    level: IQuestionLevel.SECOND,
                    question: 'implementing elements without jsx',
                    suggestion: 'implementing elements without jsx (https://ru.reactjs.org/docs/react-without-jsx.html)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.3',
                    level: IQuestionLevel.THIRD,
                    question: 'React.CreateElement',
                    suggestion: 'React.CreateElement',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.4',
                    level: IQuestionLevel.SECOND,
                    question: 'React.Fragment',
                    suggestion: 'React.Fragment',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.4',
                    level: IQuestionLevel.THIRD,
                    question: 'React.Fragment vs div',
                    suggestion: 'React.Fragment vs div',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.4',
                    level: IQuestionLevel.FIRST,
                    question: 'Hooks',
                    grade: IQuestionGrade.NONE,
                    suggestion: 'Hooks',
                },
                {
                    id: '1.5',
                    level: IQuestionLevel.SECOND,
                    question: 'useEffect',
                    grade: IQuestionGrade.NONE,
                    suggestion: 'useEffect',
                },
                {
                    id: '1.6',
                    level: IQuestionLevel.THIRD,
                    question: 'order of calling',
                    suggestion: 'order of calling useEffect and render (https://dev.to/bytebodger/constructors-in-functional-components-with-hooks-280m)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'dependencies array',
                    suggestion: 'useEffect: dependencies array',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'empty dependencies array vs without dependencies',
                    suggestion: 'useEffect: empty dependencies array vs without dependencies',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'function in return',
                    suggestion: 'useEffect: function in return',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'calling function in return without dependencies',
                    suggestion: 'useEffect: calling function in return without dependencies',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useState',
                    suggestion: 'useState',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'default value',
                    suggestion: 'useState: default value',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'function as default value',
                    suggestion: 'useState: function as default value',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'function in setState',
                    suggestion: 'useState: function in setState',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useContext',
                    suggestion: 'useContext',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'React.Context',
                    suggestion: 'React.Context',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'Context.Provider',
                    suggestion: 'Context.Provider',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'Context.Consumer',
                    suggestion: 'Context.Consumer',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'disadvantages of using React.Context',
                    suggestion: 'disadvantages of using React.Context',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useMemo',
                    suggestion: 'useMemo',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'memoization pattern',
                    suggestion: 'memoization pattern',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'dependencies',
                    suggestion: 'useMemo: dependencies',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'useMemo vs useCallback',
                    suggestion: 'useMemo vs useCallback',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'useMemo vs React.memo',
                    suggestion: 'useMemo vs React.memo',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useLayoutEffect',
                    suggestion: 'useLayoutEffect',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'order of calling',
                    suggestion: 'order of calling useLayoutEffect (https://dev.to/bytebodger/constructors-in-functional-components-with-hooks-280m)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'useLayoutEffect vs useEffect',
                    suggestion: 'useLayoutEffect vs useEffect (https://daveceddia.com/useeffect-vs-uselayouteffect/)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useRef',
                    suggestion: 'useRef',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'ref',
                    suggestion: 'ref',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'useRef vs useState',
                    suggestion: 'useRef vs useState',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'using hooks rules',
                    suggestion: 'using hooks rules',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'custom hooks rules',
                    suggestion: 'custom hooks rules',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.FIRST,
                    question: 'VirtualDOM',
                    suggestion: 'VirtualDOM',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'reconciliation algorithm',
                    suggestion: 'reconciliation algorithm',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'key',
                    suggestion: 'key',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: "'array's index as a key",
                    suggestion: "array's index as a key",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'using “real” DOM instead of Virtual Dom cases',
                    suggestion: 'using “real” DOM instead of Virtual Dom cases',
                    grade: IQuestionGrade.NONE,
                }
            ],
        },
    ]
};
