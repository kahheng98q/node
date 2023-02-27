import { CustomAPIError } from "../errors/custom-error";
export const errHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ error: err });
    }
    return res.status(500).json({ msg: err });
};
