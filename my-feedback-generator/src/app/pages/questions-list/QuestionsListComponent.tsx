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
        onChangeStudies,
        onChangeMotivation
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
                label="Personal impression"
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

            <TextEditorComponent
                onChangeText={onChangeMotivation}
                changeableText={questionsList && questionsList.motivationWorkingForCompany ? questionsList.motivationWorkingForCompany : ''}
                label="Motivation of working for company"
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

            <pre style={{userSelect: 'auto'}}>
                        {
                        ` Technical tasks
                        
 Task 1. Implement CommonComponent, that renders some ButtonsComponents with inner text.
 Next behavior needs to be realized:
 - ButtonComponent receives number and render button that has this number as a text.
 - after click number increases.
 - CommonComponent has to receive ButtonComponents and shows them.

 Task 2. Implement functional React component that get data from API and show that.
 API returns array from goods.
 Example: [{id: 1, name: computer}, …].

 Additional task: You need to make additional request that contains goods’ prices, 
 receive them, sort by price and add price to your output.
 Example: [{id: 2, price: 2000}, ...]

 Task 3. Implement fragment of JS code that works with two API 
 and generates list of films where each of items contain name and image and should be sorted by name.
 First API provides films' covers. 
 Example: [{filmId: 2, image: 'url'}, ...].
 Second API provides information about films.
 Examples: [{filmId: 1, name: 'Avatar'}, ...].

 Task 4. Implement hook constructor that calls callback before render.`
                    }
                </pre>
            <br/>
            <br/>
            <br/>
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
    onChangeMotivation: (motivation: string) => void
}
