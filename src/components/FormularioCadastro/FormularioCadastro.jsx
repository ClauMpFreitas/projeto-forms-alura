import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function anterior() {
    setEtapaAtual(etapaAtual - 1);
  }

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
  ];

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
      {etapaAtual > 0 && (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={anterior}
          style={{ marginTop: "10px" }}
        >
          Voltar
        </Button>
      )}
    </>
  );
}

export default FormularioCadastro;
