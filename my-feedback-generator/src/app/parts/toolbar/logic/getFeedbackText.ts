import {IQuestionsList} from "../../../types/IQuestionsList";
import {IQuestionGrade} from "../../../types/IQuestionGrade";
import {IQuestion} from "../../../types/IQuestion";
import {IThemeGrade} from "../../../types/IThemGrade";
import {IQuestionLevel} from "../../../types/IQuestionLevel";
import {IQuestionsTheme} from "../../../types/IQuestionsThem";

export const getFeedbackText = (questionsList: IQuestionsList): string => {

    let mainPart = ''

    mainPart = mainPart + `Actual level: ${questionsList.actualLevel}\n\n`

    mainPart = mainPart + `English: ${questionsList.english}\n\n`

    mainPart = mainPart + `Would work with candidate: ${questionsList.wouldWorkWithCandidate}\n\n`

    mainPart = mainPart + `Vector of development: ${questionsList.vectorOfDevelopment}\n\n`

    mainPart = mainPart + `Personal impression: ${questionsList.personalImpression}\n\n`

    mainPart = mainPart + `Experience: ${questionsList.experience}\n\n`

    mainPart = mainPart + `Technologies: ${questionsList.technologies}\n\n`

    mainPart = mainPart + `Restrictions: ${questionsList.restrictions}\n\n`

    mainPart = mainPart + `Priorities: ${questionsList.priorities}\n\n`

    mainPart = mainPart + `Studies: ${questionsList.studies}\n\n`

    mainPart = mainPart + `Motivation of working for company: ${questionsList.motivationWorkingForCompany}\n\n`

    let skillsPart = 'Checked skills (grades: poor, avg, good):\n\n';

    let suggestionsPart = 'It would be great if you fixed next gaps: \n\n';

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