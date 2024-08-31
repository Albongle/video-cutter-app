import { VideoConfig } from 'src/types/video-config.type';
import Logger from './logger';
import ffmpeg from 'ffmpeg';

type Paramaters = { target: string; output: string; videoConfig: VideoConfig };

async function executeCommand({ target, output, videoConfig }: Paramaters): Promise<void> {
    try {
        const targetVideo = await new ffmpeg(target);
        targetVideo.setVideoStartTime(videoConfig.start).setVideoDuration(videoConfig.duration);
        try {
            const newVideo = await targetVideo.save(`${output}/${videoConfig.name}.mp4`);
            Logger.log(`Video creado: ${newVideo}`);
        } catch (error: any) {
            Logger.error(`Error al cortar al video ${videoConfig.name}: ${error.message}`);
        }
    } catch (error: any) {
        Logger.error(`Error: ${error.message}`);
    }
    process.exit();
}

process.on('message', async (parameters: Paramaters) => {
    await executeCommand(parameters);
});
