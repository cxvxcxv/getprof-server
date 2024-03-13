class AppError extends Error {
	constructor(message: string, public statusCode: number) {
		super(message);
	}
}

class NotFoundError extends AppError {
	constructor(message = "not found.") {
		super(message, 404);
	}
}

class BadRequestError extends AppError {
	constructor(message = "bad request.") {
		super(message, 400);
	}
}

export { AppError, NotFoundError, BadRequestError };
