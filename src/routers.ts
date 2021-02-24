import {Router} from "express";
import {userController} from "./controllers/userController"
const router = Router();

const UserController = new userController();

router.post("/user", UserController.create);

export {router};