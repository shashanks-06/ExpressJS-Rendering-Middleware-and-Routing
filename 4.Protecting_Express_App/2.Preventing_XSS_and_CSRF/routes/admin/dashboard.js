import moment from "moment";
import { getFlaggedPosts } from "../../controllers/post.js";

export default async (req, res) => {
  try {
    const getPosts = await getFlaggedPosts();
    res.render("dashboard", {
      user: req.session.user.name,
      lastLoggedin: moment(req.session.user.lastLoggedIn).format(
        "MMMM, do YYYY, h:mm:ss a"
      ),
      posts: getPosts,
      csrfToken: req.csrfToken(),
    });
  } catch (error) {
    res.send("There was an error while loading the page");
  }
};
