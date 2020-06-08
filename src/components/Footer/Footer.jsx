import React from "react";
import logo from '../../image/footer_image.png'

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="image" src={ logo }/>
      <span>Contrato do Usuário</span>
      <span>Política de Privacidade do LinkedIn </span>
      <span>Diretrizes da Comunidade</span>
      <span>Política de Cookies</span>
      <span>Política de Direitos Autorais</span>
      <span>Enviar feedback</span>
    </footer>
  );
};

export default Footer;
