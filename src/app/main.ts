import minimist from 'minimist';
import Logger from './modules/logger';
import { FileManager } from './modules/file-manager';
import { VideoCutter } from './modules/video-cutter';

export class Program {
    public main(...args) {
        const options = {
            default: { file: './.ffmpeg.json', output: './recortes', target: undefined },
            alias: { f: 'file', o: 'output', t: 'target' },
        };
        const { file, output, target } = minimist(args, options);
        if (!target) {
            throw new Error('el target es requerido');
        }
        const fileManager = new FileManager(file, output);
        const videoCutter = new VideoCutter(fileManager);
        videoCutter.startCuttingVideos(target);
    }
}

process.on('uncaughtException', (error) => {
    Logger.log(`Se detiene la ejecucion ${error.message}`);
});
