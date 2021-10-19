import { Router } from "express";
import { CreateMessageController } from './controllers/CreateMessageController';
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);
export { router }