import { useState } from "react";
import EditLogout from "../../components/Edit&Logout/index";
import BackgroundLetterAvatars from "../User/index";
import Arrow from "../../assets/arrow.svg";
import EditModal from "../EditModal/EditModal";
import { getItem } from "../../Utils/storage";
import ModalSucesso from "../ModalSucesso/EditModal";
import "./styles.css";

export default function Header() {
  const [isModalAberto, setModalAberto] = useState(false);
  const [isEditLogoutAberto, setEditLogoutAberto] = useState(false);
  const [isModalSucessoAberto, setModalSucessoAberto] = useState(false);
  const [alteracaoBemSucedida, setAlteracaoBemSucedida] = useState(false);
  const userName = getItem("usuario-nome");

  const lidarComCliqueNaSeta = () => {
    setEditLogoutAberto(!isEditLogoutAberto);
  };

  const handleClose = () => {
    setModalAberto(false);
    setEditLogoutAberto(false);
    setAlteracaoBemSucedida(true);
  };

  const handleOpenModalSucesso = () => {
    if (alteracaoBemSucedida) {
      setModalSucessoAberto(true);
      setAlteracaoBemSucedida(false);
    }
  };

  let page = window.location.pathname.split("/")[1];
  let title = "";
  let className = "";

  if (page === "home") {
    title = "Resumo das cobranças";
    className = "header-home";
  } else if (page === "clients") {
    title = "Clientes";
    className = "header-clients";
  }

  return (
    <header className={`header ${className} `}>
      <h2>{title}</h2>
      <div className="user">
        <div className="avatar-container">
          <BackgroundLetterAvatars userName={userName} />
          <div className="seta-balao">
            <img
              src={Arrow}
              alt="Imagem de uma seta"
              className="arrow"
              onClick={lidarComCliqueNaSeta}
            />
            <div>
              {isEditLogoutAberto && (
                <EditLogout
                  onClose={() => {
                    handleClose();
                    handleOpenModalSucesso();
                  }}
                />
              )}
            </div>
          </div>
        </div>
        {isModalAberto && <EditModal handleCloseModal={handleClose} />}
        {isModalSucessoAberto && (
          <ModalSucesso
            open={isModalSucessoAberto}
            onClose={() => setModalSucessoAberto(false)}
          />
        )}
      </div>
    </header>
  );
}
