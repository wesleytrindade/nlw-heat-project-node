import { Router } from "express";
import { CreateMessageController } from './controllers/CreateMessageController';
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { GetMessagesController } from "./controllers/GetMessagesController";
import { ProfileUserController } from "./controllers/ProfilesUserController";


const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);
router.get("/messages/getmessages/:message_limit?/:orderByDesc?", new GetMessagesController().handle)
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);
export { router }