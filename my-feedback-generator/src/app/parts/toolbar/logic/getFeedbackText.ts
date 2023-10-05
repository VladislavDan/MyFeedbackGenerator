import {IQuestionsList} from '../../../types/IQuestionsList';
import {IQuestionGrade} from '../../../types/IQuestionGrade';
import {IQuestion} from '../../../types/IQuestion';
import {IThemeGrade} from '../../../types/IThemGrade';
import {IQuestionLevel} from '../../../types/IQuestionLevel';
import {IQuestionsTheme} from '../../../types/IQuestionsThem';

export const getFeedbackText = (questionsList: IQuestionsList): string => {

    let mainPart = ''

    mainPart = mainPart + `Актуальный уровень кандидата: ${questionsList.actualLevel}\n\n`

    mainPart = mainPart + `Красные флаги: ${questionsList.english}\n\n`

    mainPart = mainPart + `Хочу ли я работать с этим кандидатом: ${questionsList.wouldWorkWithCandidate}\n\n`

    mainPart = mainPart + `Вектор развития в компании: ${questionsList.vectorOfDevelopment}\n\n`

    mainPart = mainPart + `Личное впечатление: ${questionsList.personalImpression}\n\n`

    mainPart = mainPart + `Опыт: ${questionsList.experience}\n\n`

    mainPart = mainPart + `Технологии: ${questionsList.technologies}\n\n`

    mainPart = mainPart + `Чем не хочет заниматься в компании: ${questionsList.restrictions}\n\n`

    mainPart = mainPart + `Чем хочет заниматься в компании: ${questionsList.priorities}\n\n`

    mainPart = mainPart + `Образование: ${questionsList.studies}\n\n`

    mainPart = mainPart + `Почему выбрал эту компанию: ${questionsList.motivationWorkingForCompany}\n\n`

    let skillsPart = 'Проверенные скиллы (оценки: плохо, нормально, хорошо):\n\n';

    let suggestionsPart = 'Было бы замечательно закрыть следующие пробелы: \n\n';

    questionsList.themes.forEach((theme: IQuestionsTheme, index) => {

        if (theme.grade !== IThemeGrade.NONE) {
            skillsPart = skillsPart + `${theme.name} (${theme.grade})\n\n`;

            theme.questions.forEach((question: IQuestion) => {

                if (question.grade !== IQuestionGrade.NONE) {

                    if (question.level === IQuestionLevel.FIRST) {
                        skillsPart = skillsPart + `    (${question.grade}) ${question.theme}\n`;
                    } else if (question.level === IQuestionLevel.SECOND) {
                        skillsPart = skillsPart + `        (${question.grade}) ${question.theme}\n`;
                    } else {
                        skillsPart = skillsPart + `            (${question.grade}) ${question.theme}\n`;
                    }
                }
            });

            skillsPart = skillsPart + `\n`;
        }

        if (theme.grade !== IThemeGrade.NONE) {

            const hasMinusQuestion = theme.questions.findIndex((question: IQuestion) => {
                return question.grade === IQuestionGrade.MINUS || question.grade === IQuestionGrade.PLUS_MINUS
            }) > -1;

            if (hasMinusQuestion) {
                suggestionsPart = suggestionsPart + `${index + 1}) ${theme.name}\n\n`;

                theme.questions.forEach((question: IQuestion) => {

                    if (question.grade !== IQuestionGrade.NONE) {
                        if (question.grade !== IQuestionGrade.PLUS && !!question.suggestion) {
                            suggestionsPart = suggestionsPart + ` • ${question.suggestion}\n`;
                        }
                    }
                });
                suggestionsPart = suggestionsPart + `\n`
            }
        }

    });


    return mainPart + skillsPart + suggestionsPart;
}