import { getAllPosts } from "../../controllers/post.js";

export default async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json({ posts });
  } catch (error) {
    res.status(404).json(error);
  }
};

// export default (req, res) => {
//   const posts = [
//     {
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
//     {
//       user: {
//         name: 'Joe Mockery',
//         id: 1,
//       },
//       title: 'Why React??',

//       content: "Why do you have to React to everything? I mean all I said was that the reactor was gonna blow. What's the fuss about?",
//       createdAt: '2019-11-28T11:04:06.440Z',
//       id: 2,
//       _id: 2,
//     },
//   ];

//   res.json({ posts });
// };
