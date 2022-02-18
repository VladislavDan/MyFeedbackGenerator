import {List} from '@mui/material';
import * as React from 'react';
import {FC} from 'react';
import {IQuestionsTheme} from '../../types/IQuestionsThem';
import {ThemesListItemComponent} from './elements/themes-list-item/ThemesListItemComponent';
import {IThemeGrade} from '../../types/IThemGrade';
import {IQuestionGrade} from '../../types/IQuestionGrade';


export const QuestionsListComponent: FC<IQuestionsListComponent> = ({themes, onChangeThemeGrade, onChangeQuestionGrade}) => {
    return (
        <>
            <List>
                {
                    themes.map((theme) => {
                        return <ThemesListItemComponent
                            key={theme.id}
                            theme={theme}
                            onChangeThemeGrade={onChangeThemeGrade}
                            onChangeQuestionGrade={onChangeQuestionGrade}
                        />
                    })
                }
            </List>
        </>
    )
};

interface IQuestionsListComponent {
    themes: IQuestionsTheme[]
    onChangeThemeGrade: (grade: IThemeGrade, id: string) => void
    onChangeQuestionGrade: (grade: IQuestionGrade, id: string) => void
}
