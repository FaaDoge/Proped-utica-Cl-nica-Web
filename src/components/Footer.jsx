import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #00A367;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  border-radius:18px;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Universidad UAJMS, Tarija, Bolivia | Ángela María Sánchez Herrera - Propedéutica Clínica
        <br />
        Contacto: <FooterLink href="mailto:contacto@universidaduajms.edu.bo">contacto@universidaduajms.edu.bo</FooterLink> | Teléfono: <FooterLink href="tel:+123456789">+123456789</FooterLink>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
