// import { useHistory } from "react-router-dom";

function isValidUser() {
  const username = localStorage.getItem("username");
  console.log(username);
  return !!username;
  // let history = useHistory();
}

export default isValidUser;
