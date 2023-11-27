import PropTypes from "prop-types";
import Clie from "../../assets/clientes.svg";
import Close from "../../assets/close.svg";
import "./style.css";

function ClRegister({ closeModal }) {
  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="gray-container">
      <div className="form-box">
        <div className="top-container">
          <div className="fill-container">
            <img src={Clie} alt="imagem do cadastro de clientes" />
            <strong>Cadastro do cliente</strong>
          </div>
          <img
            src={Close}
            alt="Imagem de fechar a aba"
            className="close"
            onClick={handleCancel}
          />
        </div>
        <form className="form-register">
          <span>Nome*</span>
          <input type="text" placeholder="Digite o nome" name="" id="" />
          <span>Email*</span>
          <input type="text" placeholder="Digite o e-mail" name="" id="" />
          <div className="cpf-tel">
            <div className="cpf">
              <span>CPF*</span>
              <input type="text" placeholder="Digite o CPF" name="" id="" />
            </div>
            <div className="tel">
              <span>Telefone*</span>
              <input
                type="text"
                placeholder="Digite o tefelone"
                name=""
                id=""
              />
            </div>
          </div>
          <span>Endereço</span>
          <input type="text" placeholder="Digite seu endereço" name="" id="" />
          <span>Complemento</span>
          <input type="text" placeholder="Digite o complemento" name="" id="" />
          <div className="zip-neigh">
            <div className="zip">
              <span>CEP</span>
              <input type="text" placeholder="Digite seu CEP" name="" id="" />
            </div>
            <div className="neigh">
              <span>Bairro</span>
              <input
                type="text"
                placeholder="Digite seu bairro"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="city-uf">
            <div className="city">
              <span>Cidade</span>
              <input type="text" placeholder="Digite a cidade" name="" id="" />
            </div>
            <div className="uf">
              <span>UF</span>
              <input type="text" placeholder="Digite seu UF" name="" id="" />
            </div>
          </div>
        </form>
        <div className="butn-container">
          <button className="btn-cancel" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="btn-apply">Aplicar</button>
        </div>
      </div>
    </div>
  );
}
ClRegister.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default ClRegister;
