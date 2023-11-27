import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "../../assets/edit.svg";
import Exit from "../../assets/exit.svg";
import { clear, getItem } from "../../Utils/storage";
import EditModal from "../EditModal/EditModal";
import PropTypes from "prop-types";
import useUser from "./../../Hooks/useUser";
import "../../styles/global.css";
import "./style.css";

function EditLogout({ onClose }) {
  const [isEditModalAberto, setEditModalAberto] = useState(false);
  const { usuario, setUsuario } = useUser();
  const navigate = useNavigate();

  const handleEditClick = () => {
    setUsuario({
      nome: getItem("usuario-nome"),
      email: getItem("usuario-email"),
      cpf: getItem("usuario-cpf"),
      telefone: getItem("usuario-telefone"),
      password: getItem("usuario-senha"),
      passwordConfirm: getItem("usuario-senhaConfirm"),
    });

    setEditModalAberto(true);
  };

  const handleCloseModal = () => {
    setUsuario({
      nome: getItem("usuario-nome"),
      email: getItem("usuario-email"),
      cpf: getItem("usuario-cpf"),
      telefone: getItem("usuario-telefone"),
      password: getItem("usuario-senha"),
      passwordConfirm: getItem("usuario-senhaConfirm"),
    });

    setEditModalAberto(false);
    onClose();
  };

  const handleLogout = () => {
    clear();
    navigate("/login");
  };

  const handleApplyChanges = () => {
    handleCloseModal();
  };

  return (
    <div className="edit-logout-container">
      {isEditModalAberto && (
        <EditModal
          handleCloseModal={handleCloseModal}
          handleApplyChanges={handleApplyChanges}
          usuario={usuario}
        />
      )}

      <div className="balloon">
        <div className="edit" onClick={handleEditClick}>
          <img src={Edit} alt="Imagem do botão de editar o perfil do usuário" />
          <span>Editar</span>
        </div>

        <div className="exit" onClick={handleLogout}>
          <img src={Exit} alt="Imagem do botão de logout" />
          <span>Sair</span>
        </div>
      </div>
    </div>
  );
}

EditLogout.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditLogout;
