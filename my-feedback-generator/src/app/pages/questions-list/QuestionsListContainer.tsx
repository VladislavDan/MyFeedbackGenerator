import * as React from 'react';
import {FC, useState} from 'react';

import {QuestionsListComponent} from './QuestionsListComponent';
import {QuestionsListService} from './QuestionsListService';
import {IQuestionsList} from '../../types/IQuestionsList';
import {IThemeGrade} from '../../types/IThemGrade';
import {IQuestionGrade} from '../../types/IQuestionGrade';
import {useChannel} from "../../../MyTools/channel-conception/react-hooks/useChannel";
import {useConstructor} from "../../../MyTools/react-hooks/useConstructor";

export const QuestionsListContainer: FC<IQuestionsListContainer> = ({questionsListService}) => {

    const [state, setState] = useState<QuestionsListContainerState>();

    useChannel(questionsListService.questionListChannel, (questionsList) => {
        setState(() => {
            return {
                questionsList
            }
        });
    });

    useChannel(questionsListService.changeQuestionGradeChannel, () => {
        questionsListService.questionListChannel.next('');
    });

    useChannel(questionsListService.changeThemeGradeChannel, () => {
        questionsListService.questionListChannel.next('');
    });

    useChannel(questionsListService.changeQuestionListChannel, () => {
        questionsListService.questionListChannel.next('');
    });

    useConstructor(() => {
        questionsListService.questionListChannel.next('');
    });

    const onChangeThemeGrade = (grade: IThemeGrade, id: string) => {
        questionsListService.changeThemeGradeChannel.next({grade, id})
    };

    const onChangeQuestionGrade = (grade: IQuestionGrade, id: string) => {
        questionsListService.changeQuestionGradeChannel.next({grade, id})
    };

    const onChangeEnglish = (english: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                english
            })
        }
    }

    const onChangeExperience = (experience: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                experience
            })
        }
    }

    const onChangeLevel = (actualLevel: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                actualLevel
            })
        }
    }

    const onChangePersonalImpression = (personalImpression: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                personalImpression
            })
        }
    }

    const onChangePriorities = (priorities: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                priorities
            })
        }
    }

    const onChangeRestrictions = (restrictions: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                restrictions
            })
        }
    }

    const onChangeStudies = (studies: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                studies
            })
        }
    }

    const onChangeTechnologies = (technologies: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                technologies
            })
        }
    }

    const onChangeVectorOfDevelopment = (vectorOfDevelopment: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                vectorOfDevelopment
            })
        }
    }

    const onChangeWouldWorkWithCandidate = (wouldWorkWithCandidate: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                wouldWorkWithCandidate
            })
        }
    }

    const onChangeMotivation = (motivationWorkingForCompany: string) => {
        if(state && state.questionsList) {
            questionsListService.changeQuestionListChannel.next({
                ...state.questionsList,
                motivationWorkingForCompany
            })
        }
    }

    return <QuestionsListComponent
        questionsList={state ? state.questionsList : null}
        onChangeThemeGrade={onChangeThemeGrade}
        onChangeQuestionGrade={onChangeQuestionGrade}
        onChangeEnglish={onChangeEnglish}
        onChangeExperience={onChangeExperience}
        onChangeLevel={onChangeLevel}
        onChangePersonalImpression={onChangePersonalImpression}
        onChangePriorities={onChangePriorities}
        onChangeRestrictions={onChangeRestrictions}
        onChangeStudies={onChangeStudies}
        onChangeTechnologies={onChangeTechnologies}
        onChangeVectorOfDevelopment={onChangeVectorOfDevelopment}
        onChangeWouldWorkWithCandidate={onChangeWouldWorkWithCandidate}
        onChangeMotivation={onChangeMotivation}
    />;
};

interface IQuestionsListContainer {
    questionsListService: QuestionsListService
}

interface QuestionsListContainerState {
    questionsList: IQuestionsList
}
