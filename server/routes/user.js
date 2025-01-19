import express from 'express';
import { forgotPassword, getUserById, getUserDetails, loginUser, logout, registerUser, setNewPassword } from '../controllers/user.js';
import { isAuthenticatedUser } from '../middleware/auth.js';
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.post("/forget-password", forgotPassword);
router.post("/set-password", setNewPassword);
router.get("/:id", getUserById);
export default router;
