import { useState } from "react";

export function useUserProvider() {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    password: "",
    passwordConfirm: "",
  });

  return {
    usuario,
    setUsuario,
  };
}
