import { cleanEnv } from "envalid";
import { port, str, host } from "envalid/dist/validators";

export default cleanEnv(process.env, {
	USER: str(),
	PASSWORD: str(),
	HOST: host(),
	SQLPORT: port(),
	DATABASE: str(),
	PORT: port(),
});
