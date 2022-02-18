import {Observable, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {ajax, AjaxResponse} from 'rxjs/ajax';

import {StorageService} from '../../common/services/StorageService';
import {IGoogleDriveFile} from '../../types/IGoogleDriveFile';
import {Channel} from '../../common/Channel';
import {formatCreatedDate} from './logic/formatCreatedDate';
import {IQuestionsList} from '../../types/IQuestionsList';

export class GoogleBackupsService {

    public backupsNameLoadChannel: Channel<string, IGoogleDriveFile[]>;
    public backupLoadChannel: Channel<string, IQuestionsList>;
    public backupUploadChannel: Channel<void, string>;
    public backupDeleteChannel: Channel<string, AjaxResponse<string>>;

    private backupFileName = 'my-feedback.json';
    private backupFolderName = 'my-feedback';
    private googleDriveFilesAPI = 'https://www.googleapis.com/drive/v3/files/';
    private googleDriveUploadAPI = "https://www.googleapis.com/upload/drive/v3/files/";
    private searchFilesURI = this.googleDriveFilesAPI + '?fields=files(id,createdTime)&q=name%20contains%20';
    private searchFolderURI = this.googleDriveFilesAPI + '?q=name%20contains%20';
    private getFilesAdditionalPartURI = '?alt=media';
    private googleDriveFolderType = 'application/vnd.google-apps.folder';

    constructor(private storageService: StorageService) {

        this.backupsNameLoadChannel = new Channel(() => of('').pipe(
            switchMap(() => storageService.getAuthToken()),
            switchMap(
                (authToken: string): Observable<IGoogleDriveFile[]> => this.getBackupFiles(authToken)
            ),
            map((googleDriveFiles: IGoogleDriveFile[]) => formatCreatedDate(googleDriveFiles))
        ));

        this.backupLoadChannel = new Channel((backupID: string) => of('').pipe(
            switchMap((): Observable<IQuestionsList> => this.loadBackupFile(backupID))
        ));

        this.backupUploadChannel = new Channel(() => of('').pipe(
            switchMap(() => storageService.getAuthToken()),
            switchMap((authToken: string) => this.createNewBackup(authToken))
        ));

        this.backupDeleteChannel = new Channel((fileID: string) => of("").pipe(
            switchMap(() => this.deleteBackupFile(fileID)),
            tap(() => {
                this.backupsNameLoadChannel.next('')
            })
        ));
    }

    public createNewBackup(authToken: string): Observable<string> {
        return this.getBackupFolder(authToken)
            .pipe(
                switchMap((folders: IGoogleDriveFile[]) => {
                    if (folders) {
                        let foundedFolder = folders.find((file) => {
                            return file.mimeType === this.googleDriveFolderType
                        });
                        if (foundedFolder) {
                            return of(foundedFolder.id);
                        } else {
                            return this.createBackupFolder(authToken);
                        }
                    } else {
                        return this.createBackupFolder(authToken);
                    }
                }),
                switchMap((folderId: string) => {
                    return this.createNewBackupFile(
                        authToken,
                        folderId
                    );
                }),
                switchMap((fileId: string) => {
                    return this.uploadBackupFile(
                        authToken,
                        fileId
                    )
                }),
                tap(() => {
                    this.backupsNameLoadChannel.next('');
                })
            );
    }

    public getBackupFiles(token: string): Observable<IGoogleDriveFile[]> {
        return ajax<{ files: IGoogleDriveFile[] }>(
            {
                url: `${this.searchFilesURI}'${this.backupFileName}'`,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                method: 'GET'
            }
        ).pipe(
            map((result: AjaxResponse<{ files: IGoogleDriveFile[] }>) => {
                return result.response.files;
            })
        );
    }

    public loadBackupFile(fileId: string): Observable<IQuestionsList> {
        return this.storageService.getAuthToken().pipe(
            switchMap((authToken: string) => ajax<IQuestionsList>(
                {
                    url: this.googleDriveFilesAPI + fileId + this.getFilesAdditionalPartURI,
                    headers: {
                        "Authorization": "Bearer " + authToken
                    },
                    method: "GET"
                }
            )),
            map((result: AjaxResponse<IQuestionsList>) => {
                this.storageService.setBackup(result.response);
                return result.response;
            })
        );
    }


    public getBackupFolder(token: string): Observable<IGoogleDriveFile[]> {
        return ajax<{ files: IGoogleDriveFile[] }>(
            {
                url: `${this.searchFolderURI}'${this.backupFolderName}'`,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                method: 'GET'
            }
        ).pipe(
            map((result: AjaxResponse<{ files: IGoogleDriveFile[] }>) => {
                return result.response.files;
            })
        );
    }

    public deleteBackupFile(fileId: string): Observable<AjaxResponse<string>> {
        return this.storageService.getAuthToken().pipe(
            switchMap((authToken: string) => ajax<string>(
                {
                    url: this.googleDriveFilesAPI + fileId,
                    headers: {
                        'Authorization': 'Bearer ' + authToken,
                        'Content-Type': 'application/json'
                    },
                    method: 'DELETE'
                }
            ))
        );
    }

    public createNewBackupFile(token: string, id: string): Observable<string> {
        return ajax<{ id: string }>(
            {
                url: this.googleDriveFilesAPI,
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                body: {
                    parents: [id],
                    name: this.backupFileName
                },
                method: 'POST'
            }
        ).pipe(
            map((result: AjaxResponse<{ id: string }>) => {
                return result.response.id;
            })
        );
    }

    public createBackupFolder(token: string): Observable<string> {
        return ajax<{ id: string }>(
            {
                url: this.googleDriveFilesAPI,
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                body: {
                    name: this.backupFolderName,
                    mimeType: 'application/vnd.google-apps.folder'
                },
                method: 'POST'
            }
        ).pipe(
            map((result: AjaxResponse<{ id: string }>) => {
                return result.response.id;
            })
        );
    }

    public uploadBackupFile(token: string, fileId: string): Observable<string> {
        return this.storageService.getBackup().pipe(
            switchMap((feedback: IQuestionsList) => ajax(
                {
                    url: this.googleDriveUploadAPI + fileId,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify(feedback, null, 4),
                    responseType: 'text',
                    method: 'PATCH'
                }
            ).pipe(
                map(() => {
                    return fileId;
                })
            ))
        )
    }

}
