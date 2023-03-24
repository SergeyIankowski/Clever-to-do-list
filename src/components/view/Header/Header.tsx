import { FC } from "react";
import { logOut } from "../../../firebase";
import classes from "./header.module.scss";
import HeaderProps from "./interface";

const Header: FC<HeaderProps> = ({ userName }) => {
  return (
    <header className={classes.header}>
      <p className={classes.logoutName}>{userName}</p>
      <button type="button" className={classes.logOutButton} onClick={logOut}>
        LogOut
      </button>
    </header>
  );
};

export default Header;
