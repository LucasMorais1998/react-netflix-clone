import { BiBell, BiSearch } from "react-icons/bi";

import netflixLogo from "../../assets/images/netflix-logo.png";
import userImg from "../../assets/images/user-img.png";

import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <a href="/">
          <img src={netflixLogo} alt="Logo da Netflix" width="130px" />
        </a>
      </div>
      <div className="header-tools">
        <a href="#">
          <BiBell />
        </a>
        <a href="#">
          <BiSearch alt/>
        </a>
        <a href="#">
          <img src={userImg} alt="Imagem de perfil do usuário" />
        </a>
      </div>
    </header>
  );
};

export default Header;
