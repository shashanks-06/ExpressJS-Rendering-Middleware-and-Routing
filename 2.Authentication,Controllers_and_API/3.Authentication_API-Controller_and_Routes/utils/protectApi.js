import { verifyToken } from "../controllers/user.js";

const protectApi = async (req, res, next) => {
  try {
    const authorization = req.header("Authorization");
    if (authorization) {
      // verify the jwt token here
      const token = authorization.split(" ")[1]; // bearer abcdef

      await verifyToken(token);
      return next();
    }

    return res.status(403).json({ message: "Unauthorized access!" });
  } catch (error) {
    res.status(403).json({ message: "Unauthorized access!" });
  }
};

export default protectApi;
