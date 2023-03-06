import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;

  const [, token] = authorization.split(" ");

  if (!token) {
    return res.status(401).json({ error: "Missing credentials." });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.HASH_AUTH_TOKEN);

    if (!decodedToken.name || !decodedToken.email) {
      throw new Error("Decoding error");
    }

    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
