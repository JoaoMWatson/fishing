import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <form className="Form">
          <input
            className="input email"
            placeholder="E-mail ou telefone"
            type="text"
            name="email"
          />

          <input
            className="input senha"
            placeholder="Senha"
            type="password"
            name="senha"
          />
          <button className="botao" type="submit">
            Entrar
          </button>
        </form>

        <a href="#">Esqueceu a senha?</a>

        <span className="span">
          Novo no Linkdin? <a href="#">Cadastre-se</a>
        </span>
      </>
    );
  }
}

export default LoginForm;
