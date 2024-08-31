abstract class AbstractError extends Error {
    private _cause: Error | undefined;
    constructor(message: string, cause?: Error) {
        super(message);
        this._cause = cause;
    }

    public get cause() {
        return this._cause;
    }
}

export class FileNotFoundError extends AbstractError {}
export class NotCreateFolderError extends AbstractError {}
