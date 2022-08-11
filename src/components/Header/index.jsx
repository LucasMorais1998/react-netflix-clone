import { BiBell, BiSearch } from "react-icons/bi";

import netflixLogo from "../../assets/images/netflix-logo.png";
import userImg from "../../assets/images/user-img.png";

import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <a href="/">
          <img src={netflixLogo} alt="Logo da Netflix" />
        </a>
      </div>
      <div className="header-tools">
        <a href="#">
          <BiSearch className="header-tools-search-icon" />
        </a>
        <a href="#">
          <BiBell className="header-tools-notification-icon" />
        </a>
        <a href="#">
          <img src={userImg} alt="Imagem de perfil do usuário" />
        </a>
      </div>
    </header>
  );
};

export default Header;
