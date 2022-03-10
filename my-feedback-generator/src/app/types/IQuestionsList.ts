import {IQuestionsTheme} from './IQuestionsThem';

export interface IQuestionsList {
    actualLevel?: string,
    english?: string,
    wouldWorkWithCandidate?: string,
    vectorOfDevelopment?: string,
    personalImpression?: string,
    experience?: string,
    technologies?: string,
    restrictions?: string,
    priorities?: string,
    studies?: string,
    motivationWorkingForCompany?: string,
    themes: IQuestionsTheme[]
}
