import { getPost } from "../../controllers/post.js";

export default async (req, res) => {
  try {
    const id = req.params.postId;
    const post = await getPost(id);
    res.json({ post });
  } catch (error) {
    res.status(404).json(error);
  }
};

// export default (req, res) => {
//   res.json({
//     post: {
//       user: {
//         name: 'Joe Mockery',
//         id: 1,
//       },
//       title: 'Thoughts on JavaScript',
//       content: "I love a hot cuppa Java with my donuts. Particularly when I'm reading the script for my new movie. Java and Script, mmmm, delicious!",
//       createdAt: '2019-11-28T11:01:45.948Z',
//       id: 1,
//       _id: 1,
//     },
//   });
// };
