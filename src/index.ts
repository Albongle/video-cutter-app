import { Program } from './app/main';

function run() {
    const program = new Program();
    program.main(...process.argv);
}

run();
