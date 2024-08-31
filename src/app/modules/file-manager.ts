import * as fileSystem from 'fs';
import Logger from './logger';
import { FileNotFoundError, NotCreateFolderError } from '../../types/errors';
import { VideoConfig } from 'src/types/video-config.type';

export class FileManager {
    private pathFolderToSave: string;
    private pathConfigVideoCutter: string;
    constructor(pathConfigVideoCutter: string, pathFolderToSave: string) {
        this.pathConfigVideoCutter = pathConfigVideoCutter;
        this.pathFolderToSave = pathFolderToSave;
    }

    public createFolderForSaveVideos(): string {
        Logger.log(`Los recortes se almacenaran en la siguiente ruta: ***${this.pathFolderToSave}***`);

        if (!fileSystem.existsSync(this.pathFolderToSave)) {
            fileSystem.mkdir(this.pathFolderToSave, { recursive: true }, (error) => {
                if (error) {
                    const message = `Error al crear la carpeta: ${error.message}`;
                    Logger.error(message);
                    throw new NotCreateFolderError(message, error);
                }
                Logger.log(`Carpeta creada: ${this.pathFolderToSave}`);
            });
        } else {
            Logger.log(`Carpeta contenerdora existente ${this.pathFolderToSave}`);
        }
        return this.pathFolderToSave;
    }

    public getVideoCutterConfigFromFile(): VideoConfig[] {
        if (fileSystem.existsSync(this.pathConfigVideoCutter)) {
            Logger.log(`Cargando configuracion de nuevos videos: ***${this.pathConfigVideoCutter}***`);
            const data = fileSystem.readFileSync(this.pathConfigVideoCutter, { encoding: 'utf-8' });
            const videoConfig = JSON.parse(data);
            return videoConfig;
        }
        const message = `No existe el archivo con la configuracion necesaria para el recorte de videos ${this.pathConfigVideoCutter}`;
        Logger.error(message);
        throw new FileNotFoundError(message);
    }
}
