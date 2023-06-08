import { getAll, getIdentity, logView } from "../../db/repository/identity.js";

class Identity {
 // text
 //  Identity.text()
 static text() {
  return "test";
 }

 //  await user.get_users("xxxx")
 //  await User.get_user("xxxx")
 get_user(data) {
  return getIdentity(data);
 }

 //  await user.get_users()
 //  await User.get_users()
 get_users() {
  return getAll();
 }

 //  await user.logView("xxxx")
 //  await User.logView("xxxx")
 log_view(data) {
  return logView(data);
 }
}

export default Identity;
