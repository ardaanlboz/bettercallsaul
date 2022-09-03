/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
import express from "express";
import CreateUserService from "../services/user.service";
import SuccessDataResult from "../utils/successDataResult";

const UserRouter = express.Router();

UserRouter.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const userResult = await createUserService.execute(name, email, password);

    return res.json(
      new SuccessDataResult({
        user: userResult,
      })
    );
  } catch (err) {
    return next(err);
  }
});

export default UserRouter;