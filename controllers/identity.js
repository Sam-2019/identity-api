import { parsePhoneNumber } from "awesome-phonenumber";
import { AUTH_KEY } from "../utils/config.js";
import {
  getTelcoCode,
  getTelcoName,
  stackNotFound,
  defaultMessage,
  invalidNumber,
  notFound,
} from "../utils/constants.js";
import { stack, caller } from "../utils/identity.js";
import { transformText, getCountryName } from "../utils/transformer.js";
import { getRandomItem } from "../utils/randomizer.js";
import {
  addIdentity,
  getIdentity,
  logView,
} from "../db/repository/identity.js";

import { webLookup } from "../services/id.js";

const getID = async (req, res) => {
  const authorization = req.headers.authorization;
  if (authorization != AUTH_KEY) {
    return res.status(401).json({ message: defaultMessage });
  }

  await webLookup({ data: req.params.id, res, httpView: true });
};

export { getID };
