import cleanEnv from "./cleanEnv";
import { Pool } from "pg";

const pool = new Pool({
	user: cleanEnv.USER,
	password: cleanEnv.PASSWORD,
	host: cleanEnv.HOST,
	port: cleanEnv.SQLPORT,
	database: cleanEnv.DATABASE,
});

export default {
	query: (text: string, params: any) => pool.query(text, params),
};
