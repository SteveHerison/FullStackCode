import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import * as React from "react";
import Close from "../../assets/close.svg";
import EyeClose from "../../assets/nopassword.svg";
import EyeOpen from "../../assets/yespassword.svg";
import styles from "./EditModal.module.css";
import useUser from "../../Hooks/useUser";
import instanceAxiosClients from "../../Services/apiClients";
import { validateBr, maskBr } from "js-brasil";
import { setItem } from "../../Utils/storage";
import PropTypes from "prop-types";

const PasswordToggle = ({ show, onClick, onMouseDown }) => {
  return (
    <IconButton
      aria-label={show ? "Ocultar senha" : "Mostrar senha"}
      onClick={onClick}
      onMouseDown={onMouseDown}
      edge="end"
    >
      {show ? (
        <img src={EyeOpen} alt="Eye icon" />
      ) : (
        <img src={EyeClose} alt="Eye icon" />
      )}
    </IconButton>
  );
};

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: 491,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    borderRadius: 30,
  },
  "& .MuiDialogTitle-root": {
    color: "#473446",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 24,
    fontWeight: 700,
  },
  "& .MuiTextField-root": {
    marginBottom: 10,
  },
});

const EditModal = ({ handleCloseModal, handleApplyChanges, usuario }) => {
  const { setUsuario } = useUser();

  const [open, setOpen] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const [form, setForm] = React.useState({ ...usuario });

  const [erros, setErros] = React.useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let nome, email, cpf, telefone, password, passwordConfirm;

    setErros((prevErros) => {
      const newErros = { ...prevErros };
      Object.keys(newErros).forEach((campo) => {
        if (!form[campo]) {
          newErros[campo] = `O campo ${campo} é obrigatório`;
        }
      });
      return newErros;
    });

    try {
      if (form.nome) {
        nome = form.nome.trim();
        if (nome.length < 3 || !/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
          return setErros({ ...erros, nome: "Nome inválido" });
        }
        setErros({ ...erros, nome: "" });
        setItem("usuario-nome", nome);
      } else return setErros({ ...erros, nome: "Esse campo é obrigatório" });

      if (form.email) {
        email = form.email.toLowerCase().trim();
        if (!validateBr.email(email)) {
          return setErros({ ...erros, email: "Email inválido" });
        }
        setErros({ ...erros, email: "" });
        setItem("usuario-email", email);
      } else return setErros({ ...erros, email: "Esse campo é obrigatório" });

      if (form.cpf) {
        cpf = maskBr.cpf(form.cpf.trim());
        if (!validateBr.cpf(cpf)) {
          return setErros({ ...erros, cpf: "CPF inválido" });
        }
        setErros({ ...erros, cpf: "" });
        setItem("usuario-cpf", cpf);
      }

      if (form.telefone) {
        telefone = maskBr.telefone(form.telefone.trim());
        if (!validateBr.telefone(telefone)) {
          return setErros({ ...erros, telefone: "Telefone inválido" });
        }
        setErros({ ...erros, telefone: "" });
        setItem("usuario-telefone", telefone);
      }

      if (form.password) {
        password = form.password.trim();
        if (password.length < 6) {
          return setErros({
            ...erros,
            password: "A senha deve conter no mínimo 6 caracteres",
          });
        }
        setErros({ ...erros, password: "" });
        setItem("usuario-senha", password);
      } else
        return setErros({ ...erros, password: "Esse campo é obrigatório" });

      if (form.passwordConfirm) {
        passwordConfirm = form.passwordConfirm.trim();
        if (password !== passwordConfirm) {
          return setErros({
            ...erros,
            passwordConfirm: "As senhas não coincidem",
          });
        }
        setErros({ ...erros, passwordConfirm: "" });
        setItem("usuario-senhaConfirm", passwordConfirm);
      } else
        return setErros({
          ...erros,
          passwordConfirm: "Esse campo é obrigatório",
        });

      await instanceAxiosClients.put("/user", {
        nome: form.nome,
        email: form.email,
        cpf: form.cpf,
        telefone: form.telefone,
        senha: form.password,
      });

      const updatedUsuario = { ...form };
      setUsuario(updatedUsuario);

      setItem("usuario-nome", form.nome);

      // Função para fazer as alterações na Navbar
      handleApplyChanges(updatedUsuario);

      handleClose();
    } catch (error) {
      return console.log(error.response);
    }
  };

  const handleClose = () => {
    setOpen(false);
    handleCloseModal();
  };

  const handleTogglePassword = () => setShowPassword((prevShow) => !prevShow);
  const handleTogglePassword2 = () => setShowPassword2((prevShow) => !prevShow);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <StyledDialog open={open}>
        <button className={styles.close} onClick={handleClose}>
          <img src={Close} alt="Imagem de um X para fechar o modal" />
        </button>
        <DialogTitle>Edite seu cadastro</DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="nome">Nome*</label>
            <TextField
              autoFocus
              margin="dense"
              id="nome"
              placeholder="Digite seu nome"
              type="text"
              name="nome"
              fullWidth
              error={!!erros.nome}
              value={form.nome || ""}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              helperText={
                erros.nome && (
                  <p className={styles.errorMessage}>{erros.nome}</p>
                )
              }
            />

            <label htmlFor="email">E-mail*</label>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              placeholder="Digite seu e-mail"
              type="email"
              name="email"
              variant="outlined"
              fullWidth
              error={!!erros.email}
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              helperText={
                erros.email && (
                  <p className={styles.errorMessage}>{erros.email}</p>
                )
              }
            />

            <div className={styles.box_input}>
              <div className={styles.input_duo}>
                <label htmlFor="cpf">CPF</label>
                <TextField
                  autoFocus
                  margin="dense"
                  id="cpf"
                  placeholder="Digite seu CPF"
                  type="text"
                  name="cpf"
                  value={form.cpf || ""}
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  helperText={
                    !!erros.cpf && (
                      <p className={styles.errorMessage}>{erros.cpf}</p>
                    )
                  }
                />
              </div>

              <div>
                <label htmlFor="telefone">Telefone</label>
                <TextField
                  autoFocus
                  margin="dense"
                  id="telefone"
                  placeholder="Digite seu Telefone"
                  type="text"
                  name="telefone"
                  value={form.telefone || ""}
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  helperText={
                    !!erros.telefone && (
                      <p className={styles.errorMessage}>{erros.telefone}</p>
                    )
                  }
                />
              </div>
            </div>

            <label htmlFor="senha">Nova senha*</label>
            <OutlinedInput
              id="senha"
              className={styles.passwordInput}
              fullWidth
              error={!!erros.password}
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              endAdornment={
                <PasswordToggle
                  show={showPassword}
                  onClick={handleTogglePassword}
                  onMouseDown={handleMouseDownPassword}
                />
              }
            />
            {!!erros.password && (
              <p className={styles.errorMessage}>{erros.password}</p>
            )}

            <label htmlFor="senhaConfirm">Confirmar senha*</label>
            <OutlinedInput
              id="senhaConfirm"
              fullWidth
              error={!!erros.passwordConfirm}
              type={showPassword2 ? "text" : "password"}
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              endAdornment={
                <PasswordToggle
                  show={showPassword2}
                  onClick={handleTogglePassword2}
                  onMouseDown={handleMouseDownPassword}
                />
              }
            />
            {erros.passwordConfirm && (
              <p className={styles.errorMessage}>{erros.passwordConfirm}</p>
            )}

            <div className={styles.box_actions}>
              <button className={styles.btn_app} type="submit">
                Aplicar
              </button>
            </div>
          </form>
        </DialogContent>
      </StyledDialog>
    </React.Fragment>
  );
};

EditModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleApplyChanges: PropTypes.func.isRequired,
  usuario: PropTypes.object.isRequired,
};

PasswordToggle.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
};

EditModal.propTypes = {
  usuario: PropTypes.object,
  handleCloseModal: PropTypes.func.isRequired,
  handleApplyChanges: PropTypes.func.isRequired,
};

export default EditModal;
