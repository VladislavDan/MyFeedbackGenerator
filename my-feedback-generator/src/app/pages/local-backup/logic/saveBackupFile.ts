import {IFeedback} from '../../../types/IFeedback';


export const saveBackupFile = (backup: IFeedback) => {
    const fileData: string = JSON.stringify(backup, null, 4);
    const blob = new Blob([fileData], {type: "octet/stream"});
    const url = window.URL.createObjectURL(blob);

    const fileBuffer = document.createElement('a');

    if (fileBuffer) {
        fileBuffer.href = url;
        fileBuffer.download = 'My Feedback.txt';
        fileBuffer.click();
    }
    window.URL.revokeObjectURL(url);
};
