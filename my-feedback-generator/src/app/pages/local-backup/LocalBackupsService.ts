import {of} from 'rxjs';

import {StorageService} from '../../common/services/StorageService';
import {Channel} from '../../common/Channel';
import {switchMap, tap} from 'rxjs/operators';
import {saveBackupFile} from './logic/saveBackupFile';
import {IFeedback} from '../../types/IFeedback';

export class LocalBackupsService {

    public localBackupChannel: Channel<void, IFeedback>;
    public loadBackupChannel: Channel<string, IFeedback>;

    constructor(private storageService: StorageService) {
        this.localBackupChannel = new Channel(() => this.storageService.getBackup().pipe(
            tap((backup: IFeedback) => saveBackupFile(backup))
        ));

        this.loadBackupChannel = new Channel((backupFile: string) => of('').pipe(
            switchMap(() => {
                return this.storageService.setBackup(JSON.parse(backupFile));
            })
        ));
    }
}
