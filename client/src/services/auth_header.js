const user = JSON.parse(localStorage.getItem("user"));
let userPrefernece;
if (!user) userPrefernece = "";
else {
  userPrefernece = user;
}
export default userPrefernece;
