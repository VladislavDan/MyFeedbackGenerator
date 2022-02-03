import {from, Observable} from 'rxjs';
import {DataBaseService} from './DataBaseService';
import {IFeedback} from '../../types/IFeedback';
import {ISettings} from '../../types/ISettings';

export class StorageService {

    private feedbackStorageID = 'feedback-local-storage';
    private authTokenLocalStorageID = 'auth-token';
    private settingsID = 'settings';

    constructor(private dataBaseService: DataBaseService) {
    }

    public getBackup = (): Observable<IFeedback> => {
        return from(this.getBackupFromDataBase());
    };

    private getBackupFromDataBase = async () => {
        let backup = null;

        try {
            backup = await this.dataBaseService.get<IFeedback>(this.feedbackStorageID);
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

    public setBackup(feedback: IFeedback): Observable<IFeedback> {
        return from(this.setBackupToDataBase(feedback));
    }

    private setBackupToDataBase = async (feedback: IFeedback) => {
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
