import { FileManager } from './file-manager';
import { fork } from 'node:child_process';
import os from 'os';
import path from 'path';

export class VideoCutter {
    private fileManager: FileManager;
    constructor(fileManager: FileManager) {
        this.fileManager = fileManager;
    }

    public startCuttingVideos(target: string) {
        const listOfVideoCutters = this.fileManager.getVideoCutterConfigFromFile();
        const countProccesors = os.cpus().length;
        if (listOfVideoCutters.length > countProccesors) {
            throw new Error(`Puede procesar ${countProccesors} recortes de manera simultanea`);
        }
        const output = this.fileManager.createFolderForSaveVideos();
        listOfVideoCutters.forEach((video) => {
            const process = fork(path.join(__dirname, './ffmpeg.js'));

            process.send({ target, output, videoConfig: video });
        });
    }
}
