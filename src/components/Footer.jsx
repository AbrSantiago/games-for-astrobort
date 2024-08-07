import './Footer.css';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <>
      <footer className="App-footer">
        <p>Desarrollado por:</p>
        <ul>
          <li>
            Idea: <a href="https://x.com/Cori_CatAstro" target="_blank" rel="noopener noreferrer">Coralcita
            <Icon icon="mdi:twitter" className="twitter-icon"/>
            </a>
          </li>
          <li>
            Programador: <a href="https://github.com/AbrSantiago" target="_blank" rel="noopener noreferrer">Santiago
            <Icon icon="mdi:github" className="github-icon" />
            </a>
          </li>
          <li>
            Ayudante: <a href="https://x.com/FFranTwo" target="_blank" rel="noopener noreferrer">FranTwo
            <Icon icon="mdi:twitter" className="twitter-icon"/>
          </a></li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;