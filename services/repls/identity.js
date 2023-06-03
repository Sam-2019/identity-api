import { getAll, getIdentity } from "../../db/repository/index.js";

class Identity {
 //  Identity.text()
 static text() {
  return "test";
 }

 //  await User.get_user("xxxx")
 get_user(data) {
  return getIdentity(data);
 }

 //  await User.get_users()
 get_users() {
  return getAll();
 }
}

export default Identity;
