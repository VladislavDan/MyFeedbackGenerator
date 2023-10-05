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
                label="Актуальный уровень кандидата"
            />

            <TextEditorComponent
                onChangeText={onChangeEnglish}
                changeableText={questionsList && questionsList.english ? questionsList.english : ''}
                label="Красные флаги"
            />

            <TextEditorComponent
                onChangeText={onChangeWouldWorkWithCandidate}
                changeableText={questionsList && questionsList.wouldWorkWithCandidate ? questionsList.wouldWorkWithCandidate : ''}
                label="Хочу ли я работать с этим кандидатом"
            />

            <TextEditorComponent
                onChangeText={onChangeVectorOfDevelopment}
                changeableText={questionsList && questionsList.vectorOfDevelopment ? questionsList.vectorOfDevelopment : ''}
                label="Вектор развития в компании"
            />

            <TextEditorComponent
                onChangeText={onChangePersonalImpression}
                changeableText={questionsList && questionsList.personalImpression ? questionsList.personalImpression : ''}
                label="Личное впечатление"
            />

            <TextEditorComponent
                onChangeText={onChangeExperience}
                changeableText={questionsList && questionsList.experience ? questionsList.experience : ''}
                label="Опыт"
            />

            <TextEditorComponent
                onChangeText={onChangeTechnologies}
                changeableText={questionsList && questionsList.technologies ? questionsList.technologies : ''}
                label="Технологии"
            />

            <TextEditorComponent
                onChangeText={onChangeRestrictions}
                changeableText={questionsList && questionsList.restrictions ? questionsList.restrictions : ''}
                label="Чем не хочет заниматься в компании"
            />

            <TextEditorComponent
                onChangeText={onChangePriorities}
                changeableText={questionsList && questionsList.priorities ? questionsList.priorities : ''}
                label="Чем хочет заниматься в компании"
            />

            <TextEditorComponent
                onChangeText={onChangeStudies}
                changeableText={questionsList && questionsList.studies ? questionsList.studies : ''}
                label="Образование"
            />

            <TextEditorComponent
                onChangeText={onChangeMotivation}
                changeableText={questionsList && questionsList.motivationWorkingForCompany ? questionsList.motivationWorkingForCompany : ''}
                label="Почему выбрал эту компанию"
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
                        
 Task 1. Реализовать компоненту, которая рендерит кнопки с текстом.
 Следующее поведение должно быть реализовано:
 - Компонента кнопки получает на вход число и рендерит кнопку с этим числом в качестве внутреннего текста.
 - Если нажать на кнопку число увеличивается.
 - Основная компонента получает список компонент кнопок через props и отображает их.

 Task 2. Реализовать компоненту которая получает данные через API и отображает их.
 API возвращает массив товарос.
 Пример: [{id: 1, name: computer}, …].

 Дополнительное задание: Нужно сделать дополнительный запрос и получить цены товаров, 
 объединить товары и их цены и отсортировать по цене.
 Пример: [{id: 2, price: 2000}, ...]

 Task 4. Реализовать hook конструктор который будет вызывать получаемый на вход кэлбэк до начала рендера.`
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
