import {of} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

import {StorageService} from '../../common/services/StorageService';
import {saveTextInFile} from '../../common/logic/saveTextInFile';
import {IQuestionsList} from '../../types/IQuestionsList';
import {Channel} from "../../../MyTools/channel-conception/Channel";

export class LocalBackupsService {

    public localBackupChannel: Channel<void, IQuestionsList>;
    public loadBackupChannel: Channel<string, IQuestionsList>;

    constructor(private storageService: StorageService) {
        this.localBackupChannel = new Channel(() => this.storageService.getBackup().pipe(
            tap((backup: IQuestionsList) => {
                const fileData: string = JSON.stringify(backup, null, 4);
                saveTextInFile(fileData)
            })
        ));

        this.loadBackupChannel = new Channel((backupFile: string) => of('').pipe(
            switchMap(() => {
                return this.storageService.setBackup(JSON.parse(backupFile));
            })
        ));
    }
}
