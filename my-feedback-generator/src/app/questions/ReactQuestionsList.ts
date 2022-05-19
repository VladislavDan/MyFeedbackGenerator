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
                    theme: 'JSX',
                    grade: IQuestionGrade.NONE,
                    suggestion: '',
                },
                {
                    id: '1.2',
                    level: IQuestionLevel.SECOND,
                    question: 'implementing elements without jsx',
                    theme: 'implementing elements without jsx',
                    suggestion: 'implementing elements without jsx (https://ru.reactjs.org/docs/react-without-jsx.html)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.3',
                    level: IQuestionLevel.THIRD,
                    question: 'React.CreateElement',
                    theme: 'React.CreateElement',
                    suggestion: 'React.CreateElement',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.4',
                    level: IQuestionLevel.SECOND,
                    question: 'React.Fragment',
                    theme: 'React.Fragment',
                    suggestion: 'React.Fragment',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.4',
                    level: IQuestionLevel.THIRD,
                    question: 'React.Fragment vs div',
                    theme: 'React.Fragment vs div',
                    suggestion: 'React.Fragment vs div',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.4',
                    level: IQuestionLevel.FIRST,
                    question: 'Hooks',
                    theme: 'Hooks',
                    grade: IQuestionGrade.NONE,
                    suggestion: '',
                },
                {
                    id: '1.5',
                    level: IQuestionLevel.SECOND,
                    question: 'useEffect',
                    theme: 'useEffect',
                    grade: IQuestionGrade.NONE,
                    suggestion: '',
                },
                {
                    id: '1.6',
                    level: IQuestionLevel.THIRD,
                    question: 'order of calling',
                    theme: 'order of calling',
                    suggestion: 'order of calling useEffect and render (https://dev.to/bytebodger/constructors-in-functional-components-with-hooks-280m)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'dependencies array',
                    theme: 'dependencies array',
                    suggestion: 'useEffect: dependencies array',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'empty dependencies array vs without dependencies',
                    theme: 'empty dependencies array vs without dependencies',
                    suggestion: 'useEffect: empty dependencies array vs without dependencies',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'function in return',
                    theme: 'function in return',
                    suggestion: 'useEffect: function in return',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'calling function in return without dependencies',
                    theme: 'calling function in return without dependencies',
                    suggestion: 'useEffect: calling function in return without dependencies',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useState',
                    theme: 'useState',
                    suggestion: 'useState',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'default value',
                    theme: 'default value',
                    suggestion: 'useState: default value',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'function as default value',
                    theme: 'function as default value',
                    suggestion: 'useState: function as default value',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'function in setState',
                    theme: 'function in setState',
                    suggestion: 'useState: function in setState',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useContext',
                    theme: 'useContext',
                    suggestion: 'useContext',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'React.Context',
                    theme: 'React.Context',
                    suggestion: 'React.Context',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'Context.Provider',
                    theme: 'Context.Provider',
                    suggestion: 'Context.Provider',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'Context.Consumer',
                    theme: 'Context.Consumer',
                    suggestion: 'Context.Consumer',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'disadvantages of using React.Context',
                    theme: 'disadvantages of using React.Context',
                    suggestion: 'disadvantages of using React.Context',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useMemo',
                    theme: 'useMemo',
                    suggestion: 'useMemo',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'memoization pattern',
                    theme: 'memoization pattern',
                    suggestion: 'memoization pattern',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'dependencies',
                    theme: 'dependencies',
                    suggestion: 'useMemo: dependencies',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'useMemo vs useCallback',
                    theme: 'useMemo vs useCallback',
                    suggestion: 'useMemo vs useCallback',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'useMemo vs React.memo',
                    theme: 'useMemo vs React.memo',
                    suggestion: 'useMemo vs React.memo',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useLayoutEffect',
                    theme: 'useLayoutEffect',
                    suggestion: 'useLayoutEffect',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'order of calling',
                    theme: 'order of calling',
                    suggestion: 'order of calling useLayoutEffect (https://dev.to/bytebodger/constructors-in-functional-components-with-hooks-280m)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'useLayoutEffect vs useEffect',
                    theme: 'useLayoutEffect vs useEffect',
                    suggestion: 'useLayoutEffect vs useEffect (https://daveceddia.com/useeffect-vs-uselayouteffect/)',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'useRef',
                    theme: 'useRef',
                    suggestion: 'useRef',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'ref',
                    theme: 'ref',
                    suggestion: 'ref',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'useRef vs useState',
                    theme: 'useRef vs useState',
                    suggestion: 'useRef vs useState',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'using hooks rules',
                    theme: 'using hooks rules',
                    suggestion: 'using hooks rules',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'custom hooks rules',
                    theme: 'custom hooks rules',
                    suggestion: 'custom hooks rules',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.FIRST,
                    question: 'VirtualDOM',
                    theme: 'VirtualDOM',
                    suggestion: 'VirtualDOM',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'reconciliation algorithm',
                    theme: 'reconciliation algorithm',
                    suggestion: 'reconciliation algorithm',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'key',
                    theme: 'key',
                    suggestion: 'key',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: "'array's index as a key",
                    theme: "'array's index as a key",
                    suggestion: "array's index as a key",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'using “real” DOM instead of Virtual Dom cases',
                    theme: 'using “real” DOM instead of Virtual Dom cases',
                    suggestion: 'using “real” DOM instead of Virtual Dom cases',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.FIRST,
                    question: 'React.Portal',
                    theme: 'React.Portal',
                    suggestion: 'React.Portal',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.FIRST,
                    question: 'Error Boundary',
                    theme: 'Error Boundary',
                    suggestion: 'Error Boundary',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'try/catch for JSX',
                    theme: 'try/catch for JSX',
                    suggestion: 'try/catch for JSX',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'implementation',
                    theme: 'implementation',
                    suggestion: 'Error Boundary implementation',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.FIRST,
                    question: 'HOC',
                    theme: 'HOC',
                    suggestion: 'HOC',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.FIRST,
                    question: 'Class components',
                    theme: 'Class components',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'life cycle methods',
                    theme: 'life cycle methods',
                    suggestion: 'life cycle methods of class component',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'static life cycle methods',
                    theme: 'static life cycle methods',
                    suggestion: 'static life cycle methods of class component',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'PureComponent',
                    theme: 'PureComponent',
                    suggestion: 'PureComponent',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'implementation shouldComponentUpdate',
                    theme: 'implementation shouldComponentUpdate',
                    suggestion: 'implementation shouldComponentUpdate in PureComponent',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'shallowEqual',
                    theme: 'shallowEqual',
                    suggestion: 'shallowEqual',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.FIRST,
                    question: 'Optimizations react app',
                    theme: 'Optimizations react app',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'memoization',
                    theme: 'memoization',
                    suggestion: 'memoization',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'shouldComponentUpdate',
                    theme: 'shouldComponentUpdate',
                    suggestion: 'shouldComponentUpdate',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'pagination',
                    theme: 'pagination',
                    suggestion: 'pagination to boost performance of large list',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'virtualization',
                    theme: 'virtualization',
                    suggestion: 'virtualization to boost performance of large list',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'lazy loading',
                    theme: 'lazy loading',
                    suggestion: 'lazy loading to boost performance of large list',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.FIRST,
                    question: 'Architecture of React app',
                    theme: 'Architecture of React app',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'dumb and smart components',
                    theme: 'dumb and smart components',
                    suggestion: 'dumb and smart components',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'advantages and disadvantages using dumb and smart components',
                    theme: 'advantages and disadvantages using dumb and smart components',
                    suggestion: 'advantages and disadvantages using dumb and smart components',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.SECOND,
                    question: 'atomic design',
                    theme: 'atomic design',
                    suggestion: 'atomic design',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.THIRD,
                    question: 'advantages and disadvantages using atomic design',
                    theme: 'advantages and disadvantages using atomic design',
                    suggestion: 'advantages and disadvantages using atomic design',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.7',
                    level: IQuestionLevel.FIRST,
                    question: 'Advantages and disadvantages using React',
                    theme: 'Advantages and disadvantages using React',
                    suggestion: 'Advantages and disadvantages using React',
                    grade: IQuestionGrade.NONE,
                },
            ],
        },
    ]
};
