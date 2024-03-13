import { RequestHandler } from "express";
import db from "../utils/db";

//GET UNIVERSITIES
const getUniversities: RequestHandler = async (req, res, next) => {
	try {
		const universities = await db.query("SELECT * FROM universities", []);
		res.status(200).json(universities.rows);
	} catch (err: unknown) {
		err instanceof Error && next(err);
	}
};

//GET UNIVERSITY
const getUniversity: RequestHandler = async (req, res, next) => {
	const universityId: string = req.params.universityId;

	try {
		const university = await db.query(
			`SELECT * FROM universities WHERE id = ${universityId}`,
			[]
		);
		res.status(200).json(university.rows);
	} catch (err: unknown) {
		err instanceof Error && next(err);
	}
};
export { getUniversities, getUniversity };
