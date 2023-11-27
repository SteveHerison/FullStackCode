import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Check from "../../assets/Check.svg";
import SenhaClo from "../../assets/nopassword.svg";
import SenhaOp from "../../assets/yespassword.svg";
import HorizontalLinearStepper from "../../components/Checkout/index";
import instanceAxiosUser from "../../Services/apiClients";
import { getItem } from "../../Utils/storage";
import "./styles.css";
import PropTypes from "prop-types";

const steps = [
  { label: "Cadastre-se", description: "Por favor, escreva seu nome e email" },
  { label: "Escolha uma senha", description: "Escolha uma senha segura" },
  {
    label: "Cadastro realizado com sucesso",
    description: "E-mail e senha cadastrados com sucesso",
  },
];

const FooterIcons = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="82"
    height="7"
    viewBox="0 0 82 7"
    fill={active ? "#0E8750" : "#DEDEE9"}
  >
    <path
      d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H79C80.6569 0.5 82 1.84315 82 3.5C82 5.15685 80.6569 6.5 79 6.5H3C1.34315 6.5 0 5.15685 0 3.5Z"
      fill={active ? "#0E8750" : "#DEDEE9"}
      fillRule="evenodd"
    />
  </svg>
);

FooterIcons.propTypes = {
  active: PropTypes.bool.isRequired,
};

const FooterIcon = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="82"
    height="7"
    viewBox="0 0 82 7"
    fill={active ? "#0E8750" : "#DEDEE9"}
  >
    <path
      d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H79C80.6569 0.5 82 1.84315 82 3.5C82 5.15685 80.6569 6.5 79 6.5H3C1.34315 6.5 0 5.15685 0 3.5Z"
      fill={active ? "#0E8750" : "#DEDEE9"}
      fillRule="evenodd"
    />
  </svg>
);

FooterIcon.propTypes = {
  active: PropTypes.bool.isRequired,
};

const EyeOpenIcon = () => <img src={SenhaOp} />;
const EyeClosedIcon = () => <img src={SenhaClo} />;

const isEmailValido = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function Cadastro() {
  const [showPassword1, setShowPassword1] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepetida, setSenhaRepetida] = useState("");
  const [erroMsgCadastro, setErroMsgCadastro] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem("token");

    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== senhaRepetida) {
      return setErroMsgCadastro(
        "As senhas não coincidem. Por favor, insira senhas iguais."
      );
    }

    try {
      await instanceAxiosUser.post("/sign-up", {
        nome,
        email,
        senha,
      });

      setErroMsgCadastro("");
    } catch (error) {
      setActiveStep(0);
      setSenha("");
      setSenhaRepetida("");
      return setErroMsgCadastro(error.response.data.message);
    }

    handleContinue();
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleContinue = () => {
    if (activeStep === steps.length - 1) {
      // TODO:
    } else {
      if (activeStep === 0 && (!nome || !isEmailValido(email))) {
        setErroMsgCadastro(
          "Por favor, preencha ambos os campos de nome e e-mail válidos."
        );
      } else if (activeStep === 1 && (!senha || !senhaRepetida)) {
        setErroMsgCadastro("Por favor, preencha ambos os campos de senha.");
      } else if (activeStep === 1 && senha !== senhaRepetida) {
        setErroMsgCadastro(
          "As senhas não coincidem. Por favor, insira senhas iguais."
        );
      } else if (activeStep === 1 && senha.length < 6) {
        setErroMsgCadastro("");
      } else {
        setErroMsgCadastro("");
        handleNext();
      }
    }
  };

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const toggleShowPassword = (type) => {
    if (type === 1) {
      setShowPassword1(!showPassword1);
    } else {
      setShowPassword2(!showPassword2);
    }
  };

  const handleIrParaLogin = () => {
    navigate("/login");
  };

  const pText =
    activeStep === steps.length - 1
      ? "Cadastro concluído com sucesso!"
      : "Já possui uma conta? Faça seu";

  const h2Text =
    activeStep === 2
      ? "Cadastro realizado com sucesso!"
      : "Adicione seus dados";

  return (
    <div className="container-Add">
      <HorizontalLinearStepper
        activeStep={activeStep}
        setActiveIcon={setActiveStep}
      />
      <section className="cadastro-pag">
        <div className="Box-Add">
          {activeStep === 2 ? (
            <div className="success-message-container">
              <div className="success-message">
                <img src={Check} />
                <h2>{h2Text}</h2>
              </div>

              <div className="button-container-segundo">
                <button type="button" onClick={() => handleIrParaLogin()}>
                  Ir para Login
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>{h2Text}</h2>
              <section className="Add">
                {activeStep === 0 && (
                  <>
                    <div className="input-container">
                      <p>Nome</p>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => handleInputChange(e, setNome)}
                      />
                    </div>
                    <div className="input-container">
                      <p>E-mail</p>
                      <input
                        type="text"
                        name="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail)}
                      />
                    </div>
                    {erroMsgCadastro && (
                      <span className="cadastro-erroMsg">
                        {erroMsgCadastro}
                      </span>
                    )}
                  </>
                )}

                {activeStep === 1 && (
                  <>
                    <div className="input-container">
                      <p>Senha</p>
                      <div className="password-input-container">
                        <input
                          type={showPassword1 ? "text" : "password"}
                          name="senha"
                          placeholder="Digite sua senha"
                          value={senha}
                          onChange={(e) => handleInputChange(e, setSenha)}
                        />

                        <div
                          className="eye-icon"
                          onClick={() => toggleShowPassword(1)}
                        >
                          {showPassword1 ? <EyeOpenIcon /> : <EyeClosedIcon />}
                        </div>
                      </div>
                    </div>
                    <div className="input-container">
                      <p>Repita a Senha</p>
                      <div className="password-input-container">
                        <input
                          type={showPassword2 ? "text" : "password"}
                          name="senhaRepedida"
                          placeholder="Digite sua senha"
                          value={senhaRepetida}
                          onChange={(e) =>
                            handleInputChange(e, setSenhaRepetida)
                          }
                        />

                        <div
                          className="eye-icon"
                          onClick={() => toggleShowPassword(2)}
                        >
                          {showPassword2 ? <EyeOpenIcon /> : <EyeClosedIcon />}
                        </div>
                      </div>
                    </div>
                    {erroMsgCadastro && (
                      <span className="cadastro-erroMsg">
                        {erroMsgCadastro}
                      </span>
                    )}
                  </>
                )}
              </section>
              <div className="fazer-login">
                {activeStep === 0 && (
                  <>
                    <button type="button" onClick={handleContinue}>
                      Continuar
                    </button>
                    <p>
                      {pText} <Link to="/login">Login</Link>
                    </p>
                  </>
                )}

                {activeStep === 1 && (
                  <div className="button-container">
                    <button type="submit">Finalizar Cadastro</button>
                    <p>
                      {pText} <Link to="/login">Login</Link>
                    </p>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>

        <div className="footer-svg-container">
          <div className="footer-svg">
            <FooterIcon active={activeStep === 0} />
          </div>
          <div className="footer-svg">
            <FooterIcons active={activeStep === 1} />
          </div>
          <div className="footer-svg">
            <FooterIcons active={activeStep === 2} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cadastro;
