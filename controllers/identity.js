import { AUTH_KEY } from "../utils/config.js";
import { defaultMessage } from "../utils/constants.js";
import { webLookup } from "../services/id.js";

const getID = async (req, res) => {
  const authorization = req.headers.authorization;
  if (authorization != AUTH_KEY) {
    return res.status(401).json({ message: defaultMessage });
  }

  await webLookup({ data: req.params.id, res, httpView: true });
};

export { getID };
