import moment from "moment";

export default (req, res) => {
  res.render("dashboard", {
    user: req.session.user.name,
    lastLoggedin: moment(req.session.user.lastLoggedIn).format(
      "MMMM, do YYYY, h:mm:ss a"
    ),
    posts: [
      {
        id: 1,
        author: "Joe M",
        title: "I love Express",
        content: "Express is a wonderful framework for building Node.js apps",
      },
      {
        id: 2,
        author: "Mike F",
        title: "Have you tried Pug?",
        content:
          "I recently tried the Pug templating language and its excellent",
      },
    ],
  });
};
