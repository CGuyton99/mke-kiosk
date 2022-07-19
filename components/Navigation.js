import navStyles from "../styles/Navigation.module.css";
import Image from "next/image";
import MilwaukeeCountyLogo from "../pages/assest/MilwaukeeCountyLogo.png";

const Nav = () => {
    return (
      <nav className={navStyles.navbar}>
        <div className="container">
        <div className="backbutton">
          {" "}
          <a href="javascript:history.back()">Return</a>
        </div>
        <div className="centeralign">
          <a href="http://localhost:3001" className="resize">
            <Image src={MilwaukeeCountyLogo} />
          </a>
        </div>
        </div>
      </nav>
    );
  };
  
  export default Nav;