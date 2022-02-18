import {IQuestionsList} from '../types/IQuestionsList';
import {IThemeGrade} from '../types/IThemGrade';
import {IQuestionGrade} from '../types/IQuestionGrade';
import {IQuestionLevel} from '../types/IQuestionLevel';

export const QuestionsList: IQuestionsList = {
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
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '1.4',
                    level: IQuestionLevel.FIRST,
                    question: 'Hooks',
                    grade: IQuestionGrade.NONE,
                    suggestion: '',
                },
                {
                    id: '1.5',
                    level: IQuestionLevel.SECOND,
                    question: 'useEffect',
                    grade: IQuestionGrade.NONE,
                    suggestion: '',
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
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                }
            ],
        },

        {
            id: '2',
            name: 'Redux',
            grade: IThemeGrade.NONE,
            questions: [
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: '3 principles of Redux',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                }
            ]
        }
    ]
};
