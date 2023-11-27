import { useState } from "react";
import ClRegister from "../ClientRegister/index";
import ClientsIcon from "../../assets/clientes.svg";
import FilterIcon from "../../assets/filtersearchicon.svg";
import SearchIcon from "../../assets/searchicon.svg";

import "./styles.css";

const HeaderClients = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="header-clients-container">
      <div className="header-clients-icon">
        <img src={ClientsIcon} alt="Clients Icon" />
        <h1>Clientes</h1>
      </div>

      <div className="header-clients-btn-search">
        <button className="btn-add-client" onClick={openModal}>
          + Adicionar Cliente
        </button>
        <img style={{ cursor: "pointer" }} src={FilterIcon} />

        <label className="search-box">
          <input type="text" id="txtBusca" placeholder="Buscar..." />
          <img src={SearchIcon} id="btnBusca" alt="Buscar" />
        </label>
      </div>

      {isModalOpen && <ClRegister closeModal={closeModal} />}
    </div>
  );
};

export default HeaderClients;
