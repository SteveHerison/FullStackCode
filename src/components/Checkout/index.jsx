import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import "./styles.css";

const steps = [
  { label: "Cadastre-se", description: "Por favor, escreva seu nome e email" },
  { label: "Escolha uma senha", description: "Escolha uma senha segura" },
  {
    label: "Cadastro realizado com sucesso",
    description: "E-mail e senha cadastrados com sucesso",
  },
];

const CustomCircle = ({ active, before, onClick, success }) => {
  if (success) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill="#0E8750" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.7016 10.2165C24.0686 10.531 24.1016 11.0728 23.7755 11.4266L14.294 21.7123C14.1253 21.8953 13.8835 22 13.6296 22C13.3757 22 13.134 21.8953 12.9653 21.7123L8.22453 16.5695C7.89839 16.2156 7.93143 15.6739 8.29835 15.3594C8.66527 15.0449 9.22711 15.0767 9.55326 15.4306L13.6296 19.8527L22.4467 10.2877C22.7729 9.93388 23.3347 9.90201 23.7016 10.2165Z"
          fill="#F8F8F9"
        />
      </svg>
    );
  } else if (active) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        onClick={onClick}
      >
        <circle cx="14" cy="14" r="12" fill="#0E8750" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="14" cy="14" r="3" fill="#F0F0F5" />
        </svg>
      </svg>
    );
  } else if (before) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill="#0E8750" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.7016 10.2165C24.0686 10.531 24.1016 11.0728 23.7755 11.4266L14.294 21.7123C14.1253 21.8953 13.8835 22 13.6296 22C13.3757 22 13.134 21.8953 12.9653 21.7123L8.22453 16.5695C7.89839 16.2156 7.93143 15.6739 8.29835 15.3594C8.66527 15.0449 9.22711 15.0767 9.55326 15.4306L13.6296 19.8527L22.4467 10.2877C22.7729 9.93388 23.3347 9.90201 23.7016 10.2165Z"
          fill="#F8F8F9"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        onClick={onClick}
      >
        <circle cx="14" cy="14" r="12" fill="#F0F0F5" stroke="#0E8750" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="14" cy="14" r="3" fill="#0E8750" stroke="#0E8750" />
        </svg>
      </svg>
    );
  }
};

function HorizontalLinearStepper({ activeStep, setActiveIcon }) {
  const handleIconChange = (stepIndex) => {
    setActiveIcon(stepIndex);
  };

  return (
    <Box
      style={{
        width: "750px",
        height: "100%",
        background: "#F0F0F5",
        padding: "140px 2%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              className={`custom-step-label ${
                index === activeStep ? "active" : ""
              }`}
              optional={
                <Typography
                  variant="caption"
                  style={{
                    color: "#3F3F55",
                    fontSize: "12px",
                    fontWeight: 400,
                  }}
                >
                  {step.description}
                </Typography>
              }
              icon={
                <CustomCircle
                  active={index === activeStep}
                  before={index < activeStep}
                  success={index === activeStep}
                  onClick={() => handleIconChange(index)}
                />
              }
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

CustomCircle.propTypes = {
  active: PropTypes.bool,
  before: PropTypes.bool,
  onClick: PropTypes.func,
  success: PropTypes.bool,
};

HorizontalLinearStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  setActiveIcon: PropTypes.func.isRequired,
};

export default HorizontalLinearStepper;
