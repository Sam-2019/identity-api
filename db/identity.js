import { getAll, getIdentity } from "./repository/index.js";

class Identity {
 //  await Identity.connect()
 static connect() {
  return connectDB();
 }

 //  await Identity.text()
 static text() {
  return "test";
 }

 //  await User.get_user()
 get_user(data) {
  return getIdentity(data);
 }

 //  await User.get_users()
 get_users() {
  return getAll();
 }
}

export default Identity;
