import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "@fontsource/roboto";
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ fontWeight: "bold" }}
        >
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
