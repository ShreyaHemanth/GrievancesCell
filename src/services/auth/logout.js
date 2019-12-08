// import { useHistory } from "react-router-dom";

function logout() {
  localStorage.removeItem("username");
  return;
  // let history = useHistory();
}

export default logout;
