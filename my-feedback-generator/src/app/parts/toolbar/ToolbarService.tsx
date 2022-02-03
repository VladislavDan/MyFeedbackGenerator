import {Routs} from '../../common/Routs';

class ToolbarService {

    public getPageLabel(path: string) {
        if (path === Routs.googleAuth.path) {
            return Routs.googleAuth.name;
        }

        if (path === Routs.googleBackups.path) {
            return Routs.googleBackups.name;
        }

        if (path === Routs.localBackups.path) {
            return Routs.localBackups.name;
        }

        if (path === Routs.settings.path) {
            return Routs.settings.name;
        }

        return 'My Feedback'
    }
}

export const toolbarManager = new ToolbarService();
