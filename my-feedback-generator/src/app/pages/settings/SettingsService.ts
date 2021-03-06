import {StorageService} from '../../common/services/StorageService';
import {ISettings} from '../../types/ISettings';
import {Channel} from "../../../MyTools/channel-conception/Channel";

export class SettingsService {

    public settingsChannel: Channel<string, ISettings>;

    public changeSettingsChannel: Channel<ISettings, ISettings>;

    constructor(storageService: StorageService) {

        this.settingsChannel = new Channel(() => storageService.getSettings());

        this.changeSettingsChannel = new Channel(
            (settings: ISettings) => storageService.setSettings(settings)
        );
    }
}
