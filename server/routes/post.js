import express from "express";
import {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    addComment,
    deleteComment,
    likePost,
} from "../controllers/post.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.post("/new", isAuthenticatedUser, singleUpload, createPost);
router.get("/all", getPosts);
router.get("/:id", getPostById);
router.route("/:id/comment/new").post(isAuthenticatedUser, addComment);
router.route("/:pid/comment/:cid").delete(isAuthenticatedUser, deleteComment);
router.route("/like/:id").get(isAuthenticatedUser, likePost);
router.route("/:id").put(isAuthenticatedUser, singleUpload, updatePost).delete(isAuthenticatedUser, deletePost);

export default router;
