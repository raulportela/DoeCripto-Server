import { Router } from "express";
import { DonationController } from "./controllers/DonationController";
import { InstitutionController } from "./controllers/InstitutionController";
import { WelcomeController } from "./controllers/WelcomeController";
import { CategoryController } from "./controllers/CategoryController";
import { UserController } from "./controllers/UserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const welcomeController = new WelcomeController();
const donationController = new DonationController();
const institutionController = new InstitutionController();
const categoryController = new CategoryController();
const userController = new UserController();
const authenticateUserController = new AuthenticateUserController();

router.get("/", welcomeController.handle);

router.post("/donation", donationController.create);
router.post(
  "/institution",
  ensureAuthenticated,
  ensureAdmin,
  institutionController.create
);
router.post("/category", ensureAdmin, categoryController.create);
router.post("/singUp", ensureAuthenticated, userController.create);
router.post("/singIn", authenticateUserController.handle);

export { router };
