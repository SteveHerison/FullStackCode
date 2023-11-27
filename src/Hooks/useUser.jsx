import { useContext } from "react";
import UserContext from "../Contexts/userContext";

function useUser() {
  return useContext(UserContext);
}

export default useUser;
