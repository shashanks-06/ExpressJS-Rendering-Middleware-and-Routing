import { signupUser } from "../../controllers/user.js";

export default async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { user, token } = await signupUser({ name, email, password });
    res.json({ user, token });
  } catch (error) {
    res.status(403).json(error);
  }
};
