import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/login.png";
import "./style.css";
import { setItem, getItem } from "../../Utils/storage";
import { validateBr } from "js-brasil";
import instanceAxiosUser from "../../Services/apiUsers";
import SenhaOp from "../../assets/yespassword.svg";
import SenhaClo from "../../assets/nopassword.svg";
import { useUser } from "../../Contexts/userContext";

const EyeOpenIcon = () => <img src={SenhaOp} />;
const EyeClosedIcon = () => <img src={SenhaClo} />;

function Login() {
  const [showPassword1, setShowPassword1] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroMsg, setErroMsg] = useState("");
  const { setUsuario, usuario } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem("token");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !senha) {
      return setErroMsg("Preencha todos os campos");
    }

    setEmail(email.trim());
    setSenha(senha.trim());

    if (!validateBr.email(email)) return setErroMsg("Email inválido");
    if (senha.length < 6)
      return setErroMsg("A senha deve conter no mínimo 6 caracteres");

    setErroMsg("");

    try {
      const response = await instanceAxiosUser.post("/login", {
        email,
        senha,
      });

      const { token, usuario: usuarioResponse } = response.data;

      setItem("token", token);
      setItem("usuarioId", usuarioResponse.id);
      setItem("usuario-nome", usuarioResponse.nome);
      setItem("usuario-email", usuarioResponse.email);

      setItem("usuario-senha", usuario.password);
      setItem("usuario-senhaConfirm", usuario.password);

      if (usuarioResponse.cpf) {
        setItem("usuario-cpf", usuarioResponse.cpf);
      }

      if (usuarioResponse.telefone) {
        setItem("usuario-cpf", usuarioResponse.cpf);
      }

      setUsuario({
        ...usuario,
        nome: usuarioResponse.nome,
        passwordConfirm: usuario.password,
      });

      setErroMsg("");
      navigate("/home");
    } catch (error) {
      console.error(error.message);
      console.error(error.response?.data?.message);
    }
  }

  const toggleShowPassword = (type) => {
    if (type === 1) {
      setShowPassword1(!showPassword1);
    } else {
      setShowPassword2(!showPassword2);
    }
  };

  return (
    <div className="main-container">
      <div className="login-img">
        <img src={LoginImage} alt="Imagem da tela de login" />
        <strong className="image-strong">
          Gerencie todos os pagamentos <br /> da sua empresa em um só <br />
          lugar.
        </strong>
      </div>
      <div className="login-box">
        <div className="login">
          <h1>Faça seu login!</h1>
          <form onSubmit={handleSubmit}>
            E-mail
            <input
              type="text"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className="password">
              <span>Senha</span>
              <a className="link">Esqueceu a senha?</a>
            </div>
            <div className="input-login-senha">
              <input
                type={showPassword1 ? "text" : "password"}
                name="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <div className="eye-icon" onClick={() => toggleShowPassword(1)}>
                {showPassword1 ? <EyeOpenIcon /> : <EyeClosedIcon />}
              </div>
            </div>
            {erroMsg && <span className="login-erroMsg">{erroMsg}</span>}
            <button className="login-btn" type="submit">
              Entrar
            </button>
            <strong className="link-register">
              Ainda não possui uma conta?
              <Link className="link" to="/">
                Cadastre-se
              </Link>
            </strong>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
