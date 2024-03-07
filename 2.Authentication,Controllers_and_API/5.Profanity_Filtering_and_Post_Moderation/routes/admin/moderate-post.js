import { approvePost, deletePost } from "../../controllers/post.js";

export default async (req, res) => {
  try {
    const { task, postId } = req.body;
    task === "approve" ? await approvePost(postId) : await deletePost(postId);
  } finally {
    res.redirect("/admin/dashboard");
  }
};
