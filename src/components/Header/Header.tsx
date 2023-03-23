import { logOut } from "../../firebase";
import classes from "./header.module.scss";

type HeaderProps = {
  userName: string;
};

const Header = ({ userName }: HeaderProps) => {
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
