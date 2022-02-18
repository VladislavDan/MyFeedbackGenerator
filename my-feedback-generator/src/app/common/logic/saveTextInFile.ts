export const saveTextInFile = (text: string) => {
    const blob = new Blob([text], {type: "octet/stream"});
    const url = window.URL.createObjectURL(blob);

    const fileBuffer = document.createElement('a');

    if (fileBuffer) {
        fileBuffer.href = url;
        fileBuffer.download = 'My Feedback.txt';
        fileBuffer.click();
    }
    window.URL.revokeObjectURL(url);
};
