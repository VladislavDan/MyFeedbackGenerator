import {List} from '@mui/material';
import * as React from 'react';
import {FC} from 'react';
import {IQuestionsTheme} from '../../types/IQuestionsThem';
import {ThemesListItemComponent} from './elements/themes-list-item/ThemesListItemComponent';
import {IThemeGrade} from '../../types/IThemGrade';
import {IQuestionGrade} from '../../types/IQuestionGrade';
import {TextEditorComponent} from '../../common/elements/text-editor/TextEditorComponent';
import {IQuestionsList} from '../../types/IQuestionsList';


export const QuestionsListComponent: FC<IQuestionsListComponent> = (
    {
        questionsList,
        onChangeThemeGrade,
        onChangeQuestionGrade,
        onChangeLevel,
        onChangeEnglish,
        onChangeWouldWorkWithCandidate,
        onChangeVectorOfDevelopment
    }
) => {
    return (
        <>
            <TextEditorComponent
                onChangeText={onChangeLevel}
                changeableText={questionsList ? questionsList.actualLevel : ''}
                label="Actual level"
            />

            <TextEditorComponent
                onChangeText={onChangeEnglish}
                changeableText={questionsList ? questionsList.english : ''}
                label="English"
            />

            <TextEditorComponent
                onChangeText={onChangeWouldWorkWithCandidate}
                changeableText={questionsList ? questionsList.wouldWorkWithCandidate : ''}
                label="Would work with candidate"
            />

            <TextEditorComponent
                onChangeText={onChangeVectorOfDevelopment}
                changeableText={questionsList ? questionsList.vectorOfDevelopment : ''}
                label="Would work with candidate"
            />

            {
                questionsList ? <List>
                    {
                        questionsList.themes.map((theme) => {
                            return <ThemesListItemComponent
                                key={theme.id}
                                theme={theme}
                                onChangeThemeGrade={onChangeThemeGrade}
                                onChangeQuestionGrade={onChangeQuestionGrade}
                            />
                        })
                    }
                </List> : null
            }
        </>
    )
};

interface IQuestionsListComponent {
    questionsList: IQuestionsList | null
    onChangeThemeGrade: (grade: IThemeGrade, id: string) => void
    onChangeQuestionGrade: (grade: IQuestionGrade, id: string) => void
    onChangeLevel: (level: string) => void
    onChangeEnglish: (level: string) => void
    onChangeWouldWorkWithCandidate: (level: string) => void
    onChangeVectorOfDevelopment: (level: string) => void
}
