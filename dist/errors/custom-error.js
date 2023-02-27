export class CustomAPIError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
export const createCustomErr = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);
};
