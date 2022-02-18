import * as React from 'react';
import {FC, useState} from 'react';

import {QuestionsListComponent} from './QuestionsListComponent';
import {QuestionsListService} from './QuestionsListService';
import {useChannel} from '../../common/hooks/useChannel';
import {IQuestionsList} from '../../types/IQuestionsList';
import {useConstructor} from '../../common/hooks/useConstructor';
import {IThemeGrade} from '../../types/IThemGrade';
import {IQuestionGrade} from '../../types/IQuestionGrade';

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

    useConstructor(() => {
        questionsListService.questionListChannel.next('');
    });

    const onChangeThemeGrade = (grade: IThemeGrade, id: string) => {
        questionsListService.changeThemeGradeChannel.next({grade, id})
    };

    const onChangeQuestionGrade = (grade: IQuestionGrade, id: string) => {
        questionsListService.changeQuestionGradeChannel.next({grade, id})
    };

    return <QuestionsListComponent
        themes={state ? state.questionsList.themes : []}
        onChangeThemeGrade={onChangeThemeGrade}
        onChangeQuestionGrade={onChangeQuestionGrade}
    />;
};

interface IQuestionsListContainer {
    questionsListService: QuestionsListService
}

interface QuestionsListContainerState {
    questionsList: IQuestionsList
}
