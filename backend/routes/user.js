import express from 'express';
import { signupCtrl } from '../controllers/user.js';
const userRouter = express.Router();

userRouter.post('/signup', signupCtrl);

export { userRouter } from '../routes/user.js';
