import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Cadastro from "./Pages/Cadastrar/index";
import Home from "./Pages/Home/index";
import Login from "./Pages/Login/index";
import { getItem } from "./Utils/storage";
import { UserProvider } from "./Contexts/userContext";
import Clients from "./Pages/Clients/index";
import PropTypes from "prop-types";


function ProtectedRoutes({ redirectTo }) {
  const token = getItem("token");

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

ProtectedRoutes.propTypes = {
  redirectTo: PropTypes.string.isRequired,
};
function MainRoutes() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
        <Route element={<ProtectedRoutes redirectTo="/home" />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default MainRoutes;
