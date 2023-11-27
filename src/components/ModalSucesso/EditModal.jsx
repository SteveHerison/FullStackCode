import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/system";
import * as React from "react";
import Check from "../../assets/check.svg";
import { PropTypes } from "prop-types";

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 600,
    height: 512,
    flexshrink: 0,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    borderRadius: 30,
  },
  "& .MuiDialogTitle-root": {
    textAlign: "center",
    fontFamily: "Montserrat",
    color: "#343447",
    fontSize: 24,
    fontWeight: 700,
  },
  "& .MuiTextField-root": {
    marginBottom: 10,
  },
});

const ModalSucesso = ({ open, onClose }) => {
  React.useEffect(() => {
    if (open) {
      const timerId = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timerId);
    }
  }, [open, onClose]);

  return (
    <React.Fragment>
      <StyledDialog open={open}>
        <DialogTitle>
          <img src={Check} alt="Ícone de sucesso" />
        </DialogTitle>
        <DialogTitle>Cadastro Alterado com sucesso!</DialogTitle>
      </StyledDialog>
    </React.Fragment>
  );
};

ModalSucesso.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ModalSucesso;
