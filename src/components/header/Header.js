import './Header.css'
import HeaderBar from "../header-bar/HeaderBar";
import MenuNav from "../menu-nav/MenuNav";

function Header() {
  return (
    <header>
      <HeaderBar></HeaderBar>
      <div className={"header-logo"}>
        <div className={"container"}>
          <img src={"/header-logo.svg"} />
        </div>
      </div>
      <MenuNav></MenuNav>
    </header>
  );
}

export default Header;