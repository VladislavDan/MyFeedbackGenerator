import {default as React, FC} from 'react';
import {List, ListItem, ListItemText, MenuItem, Select, SelectChangeEvent} from '@mui/material';

import {IQuestionsTheme} from '../../../../types/IQuestionsThem';
import {IQuestion} from '../../../../types/IQuestion';
import {QuestionsListItemComponent} from '../questions-list-item/QuestionsListItemComponent';
import {IThemeGrade} from '../../../../types/IThemGrade';
import './ThemesListItemComponent.css'
import {IQuestionGrade} from '../../../../types/IQuestionGrade';

export const ThemesListItemComponent: FC<IThemesListItemComponent> = ({theme, onChangeThemeGrade, onChangeQuestionGrade}) => {

    const onChange = (event: SelectChangeEvent) => {
        const grade: IThemeGrade = event.target.value as IThemeGrade;
        onChangeThemeGrade(grade, theme.id)
    };

    return (
        <>
            <ListItem>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={theme.grade}
                    className="them-grade-selector"
                    onChange={onChange}
                >
                    <MenuItem value={IThemeGrade.NONE}>{IThemeGrade.NONE}</MenuItem>
                    <MenuItem value={IThemeGrade.GOOD}>{IThemeGrade.GOOD}</MenuItem>
                    <MenuItem value={IThemeGrade.AVG}>{IThemeGrade.AVG}</MenuItem>
                    <MenuItem value={IThemeGrade.POOR}>{IThemeGrade.POOR}</MenuItem>
                </Select>
                <ListItemText
                    primary={theme.name}
                />
            </ListItem>
            <List component="div" disablePadding>
                {
                    theme.questions.map((question: IQuestion) => {
                        return <QuestionsListItemComponent question={question} key={question.id}
                                                           onChangeQuestionGrade={onChangeQuestionGrade}/>
                    })
                }
            </List>
        </>
    );
};

interface IThemesListItemComponent {
    theme: IQuestionsTheme;
    onChangeThemeGrade: (garde: IThemeGrade, id: string) => void
    onChangeQuestionGrade: (grade: IQuestionGrade, id: string) => void
}
