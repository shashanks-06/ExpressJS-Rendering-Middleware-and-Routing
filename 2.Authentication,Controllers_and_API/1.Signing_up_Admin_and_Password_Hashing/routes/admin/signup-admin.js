import { signupAdmin } from "../../controllers/user.js";

export default async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await signupAdmin({ name, email, password });
    res.redirect("/admin/login");
  } catch (error) {
    res.redirect("/admin/signup ");
  }
};
