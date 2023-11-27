import "./styles.css";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header/index";
import ClientTable from "../../components/Table/ClientTable";
import HeaderClients from "../../components/HeaderClients";
import DetalheClients from "../../components/DetalhesClientes";

const Clients = () => {
  const [mostrarTabelaClientes, setMostrarTabelaClientes] = useState(true);

  const lidarComCliqueCliente = () => {
    setMostrarTabelaClientes(true);
  };

  const lidarComCliqueDetalhe = () => {
    setMostrarTabelaClientes(false);
  };

  return (
    <div className="container-clients">
      <NavBar />
      <div className="Prim">
        <Header />
        {mostrarTabelaClientes && <HeaderClients />}
        {mostrarTabelaClientes ? (
          <ClientTable onClientClick={lidarComCliqueDetalhe} />
        ) : (
          <DetalheClients onClientClick={lidarComCliqueCliente} />
        )}
      </div>
    </div>
  );
};

export default Clients;
