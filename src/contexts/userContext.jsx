import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import { useUserProvider } from "../Hooks/useUserProvider";

const UserContext = createContext({});

export const useUser = () => {
  return useContext(UserContext);
};

export function UserProvider(props) {
  const userProvider = useUserProvider();

  return (
    <UserContext.Provider value={userProvider}>
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
