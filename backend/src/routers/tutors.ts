/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
import express from "express";
import CreateTutorService from "../services/tutor.service";
import SuccessDataResult from "../utils/successDataResult";

const TutorRouter = express.Router();

TutorRouter.post("/", async (req, res, next) => {
  try {
    const { name, email, password, expertise } = req.body;

    const createTutorService = new CreateTutorService();

    const tutorResult = await createTutorService.execute(name, email, password, expertise);

    return res.json(
      new SuccessDataResult({
        tutor: tutorResult,
      })
    );
  } catch (err) {
    return next(err);
  }
});

export default TutorRouter;