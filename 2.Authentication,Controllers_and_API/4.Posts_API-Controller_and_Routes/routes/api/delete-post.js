import { deletePost } from "../../controllers/post.js";

export default async (req, res) => {
  try {
    const postId = req.params.postId;
    await deletePost(postId);
    res.json({ status: true });
  } catch (error) {
    res.status(401).json({ error });
  }
};

// export default (req, res) => {
//   let postId = req.params.postId;
//   const posts = [
//     { id: 1, title: "First post" },
//     { id: 2, title: "Second post" },
//   ];
//   res.json({
//     post: postId ? posts.filter((p) => p.id != postId) : posts,
//   });
// };
