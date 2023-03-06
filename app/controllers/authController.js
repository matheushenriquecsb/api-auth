import authService from "../services/authService.js";

export const login = async (req, res) => {
  try {
    const response = await authService.login(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const response = await authService.register(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default { login, register };
