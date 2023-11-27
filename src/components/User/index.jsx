import { Avatar, Stack } from "@mui/material";
import PropTypes from "prop-types";

function stringAvatar(userName) {
  let avatarLetter = "";

  if (userName && userName.trim() !== "") {
    const nome = userName.split(" ");

    if (nome.length > 1) {
      avatarLetter = `${nome[0][0]}${nome[1][0]}`;
    } else if (nome.length === 1) {
      avatarLetter = `${nome[0][0]}`;
    }
  }

  return {
    sx: {
      bgcolor: "#ccc",
      color: "green",
    },
    children: avatarLetter.toUpperCase(),
  };
}

function mostrarNomesCompletos(userName) {
  if (userName && userName.trim() !== "") {
    const nome = userName.split(" ");

    if (nome.length > 1) {
      const doisPrimeirosNomes = nome
        .slice(0, 2)
        .map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1))
        .join(" ");
      return doisPrimeirosNomes;
    } else if (nome.length === 1) {
      return nome[0].charAt(0).toUpperCase() + nome[0].slice(1);
    }
  }
  return "";
}

export default function BackgroundLetterAvatars({ userName }) {
  const avatarProps = stringAvatar(userName || "");
  const nomeCompleto = mostrarNomesCompletos(userName || "");

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar {...avatarProps} />
      <span style={{ color: "green" }}>{nomeCompleto}</span>
    </Stack>
  );
}

BackgroundLetterAvatars.propTypes = {
  userName: PropTypes.string.isRequired,
};
