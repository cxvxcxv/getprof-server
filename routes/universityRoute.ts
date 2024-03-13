import express from "express";
import {
	getUniversities,
	getUniversity,
} from "../controllers/universityController";

const router = express.Router();

router.get("/", getUniversities);
router.get("/:universityId", getUniversity);

export default router;
