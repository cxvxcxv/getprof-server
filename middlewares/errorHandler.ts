import { NextFunction, Request, RequestHandler, Response } from 'express';
import { AppError, NotFoundError } from '../utils/customErrors';

const notFound: RequestHandler = async (req, res, next) => {
	next(new NotFoundError(`not found - ${req.originalUrl}`));
};

const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	err instanceof AppError
		? res.status(err.statusCode).json({ error: err.message })
		: res.status(500).json({ error: 'an unknown error has been occured.' });
};

export { errorHandler, notFound };
