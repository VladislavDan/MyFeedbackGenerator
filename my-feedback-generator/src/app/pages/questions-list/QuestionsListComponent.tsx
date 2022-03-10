import {List} from '@mui/material';
import * as React from 'react';
import {FC} from 'react';
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
        onChangeVectorOfDevelopment,
        onChangePersonalImpression,
        onChangeExperience,
        onChangeTechnologies,
        onChangeRestrictions,
        onChangePriorities,
        onChangeStudies
    }
) => {
    return (
        <>
            <TextEditorComponent
                onChangeText={onChangeLevel}
                changeableText={questionsList && questionsList.actualLevel ? questionsList.actualLevel : ''}
                label="Actual level"
            />

            <TextEditorComponent
                onChangeText={onChangeEnglish}
                changeableText={questionsList && questionsList.english ? questionsList.english : ''}
                label="English"
            />

            <TextEditorComponent
                onChangeText={onChangeWouldWorkWithCandidate}
                changeableText={questionsList && questionsList.wouldWorkWithCandidate ? questionsList.wouldWorkWithCandidate : ''}
                label="Would work with candidate"
            />

            <TextEditorComponent
                onChangeText={onChangeVectorOfDevelopment}
                changeableText={questionsList && questionsList.vectorOfDevelopment ? questionsList.vectorOfDevelopment : ''}
                label="Vector of development"
            />

            <TextEditorComponent
                onChangeText={onChangePersonalImpression}
                changeableText={questionsList && questionsList.personalImpression ? questionsList.personalImpression : ''}
                label="Vector of development"
            />

            <TextEditorComponent
                onChangeText={onChangeExperience}
                changeableText={questionsList && questionsList.experience ? questionsList.experience : ''}
                label="Experience"
            />

            <TextEditorComponent
                onChangeText={onChangeTechnologies}
                changeableText={questionsList && questionsList.technologies ? questionsList.technologies : ''}
                label="Technologies"
            />

            <TextEditorComponent
                onChangeText={onChangeRestrictions}
                changeableText={questionsList && questionsList.restrictions ? questionsList.restrictions : ''}
                label="Restrictions"
            />

            <TextEditorComponent
                onChangeText={onChangePriorities}
                changeableText={questionsList && questionsList.priorities ? questionsList.priorities : ''}
                label="Priorities"
            />

            <TextEditorComponent
                onChangeText={onChangeStudies}
                changeableText={questionsList && questionsList.studies ? questionsList.studies : ''}
                label="Studies"
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
    onChangeEnglish: (english: string) => void
    onChangeWouldWorkWithCandidate: (wouldWork: string) => void
    onChangeVectorOfDevelopment: (vectorOfDevelopment: string) => void
    onChangePersonalImpression: (personalImpression: string) => void
    onChangeExperience: (experience: string) => void
    onChangeTechnologies: (technologies: string) => void
    onChangeRestrictions: (restrictions: string) => void
    onChangePriorities: (priorities: string) => void
    onChangeStudies: (studies: string) => void
}
