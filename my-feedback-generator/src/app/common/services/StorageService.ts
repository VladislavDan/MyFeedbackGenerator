import {from, Observable} from 'rxjs';
import {DataBaseService} from './DataBaseService';
import {ISettings} from '../../types/ISettings';
import {IQuestionsList} from '../../types/IQuestionsList';

export class StorageService {

    private feedbackStorageID = 'feedback-local-storage';
    private authTokenLocalStorageID = 'auth-token';
    private settingsID = 'settings';

    constructor(private dataBaseService: DataBaseService) {
    }

    public getBackup = (): Observable<IQuestionsList> => {
        return from(this.getBackupFromDataBase());
    };

    private getBackupFromDataBase = async () => {
        let backup = null;

        try {
            backup = await this.dataBaseService.get<IQuestionsList>(this.feedbackStorageID);
        } catch (e) {
            console.error(e);
            return backup;
        }
        if (backup) {
            return backup;
        } else {
            return [];
        }
    };

    public setBackup(feedback: IQuestionsList): Observable<IQuestionsList> {
        return from(this.setBackupToDataBase(feedback));
    }

    private setBackupToDataBase = async (feedback: IQuestionsList) => {
        try {
            await this.dataBaseService.set(this.feedbackStorageID, feedback);
        } catch (e) {
            console.error(e);
        }
        return feedback;
    };

    public getAuthToken(): Observable<string> {
        return from(new Promise<string>((resolve, reject) => {
            const authToken = localStorage.getItem(this.authTokenLocalStorageID);
            if (authToken) {
                resolve(authToken);
            } else {
                reject('Auth token is empty')
            }
        }));
    }

    public setAuthToken(authToken: string): Observable<string> {
        return from(new Promise<string>((resolve) => {
            localStorage.setItem(this.authTokenLocalStorageID, authToken);
            resolve(authToken);
        }));
    }

    public getSettings(): Observable<ISettings> {
        return from(new Promise<ISettings>((resolve, reject) => {
            const settings = localStorage.getItem(this.settingsID);
            if (settings) {
                resolve(JSON.parse(settings) as ISettings);
            } else {
                reject({
                    isRandomRepeating: false
                })
            }
        }));
    }

    public setSettings(settings: ISettings): Observable<ISettings> {
        return from(new Promise<ISettings>((resolve) => {
            localStorage.setItem(this.settingsID, JSON.stringify(settings));
            resolve(settings);
        }));
    }
}
