import { logger } from "../logger/index";
export const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}`);
            await fn(req, res, next);
            // return next();
        }
        catch (err) {
            logger.error(err);
            next(err);
        }
    };
};
// export const testttttt = (fn: any) => {
//   return (req: any, res: any, next: any) => {
//     console.log("test");
//     fn(req, res, next);
//     next();
//   };
// };
// function greeter(fn: (a: string) => void) {
//   fn("Hello, World");
// }
// export default asyncWrapper;
