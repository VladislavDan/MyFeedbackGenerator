import {default as React, FC} from 'react';
import {ListItem, ListItemText, MenuItem, Select, SelectChangeEvent} from '@mui/material';

import {IQuestion} from '../../../../types/IQuestion';
import './QuestionsListItemComponent.css'
import {IQuestionGrade} from '../../../../types/IQuestionGrade';

export const QuestionsListItemComponent: FC<IQuestionsListItemComponent> = ({question, onChangeQuestionGrade}) => {

    const onChange = (event: SelectChangeEvent) => {
        const grade = event.target.value as IQuestionGrade
        onChangeQuestionGrade(grade, question.id);
    };

    return (
        <ListItem className={`level${question.level}-question`}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={question.grade}
                className="them-grade-selector"
                onChange={onChange}
            >
                <MenuItem value={IQuestionGrade.NONE}>{IQuestionGrade.NONE}</MenuItem>
                <MenuItem value={IQuestionGrade.PLUS}>{IQuestionGrade.PLUS}</MenuItem>
                <MenuItem value={IQuestionGrade.MINUS}>{IQuestionGrade.MINUS}</MenuItem>
                <MenuItem value={IQuestionGrade.PLUS_MINUS}>{IQuestionGrade.PLUS_MINUS}</MenuItem>
            </Select>
            <ListItemText
                primary={question.question}
            />
        </ListItem>
    );
};

interface IQuestionsListItemComponent {
    question: IQuestion;
    onChangeQuestionGrade: (grade: IQuestionGrade, id: string) => void
}
