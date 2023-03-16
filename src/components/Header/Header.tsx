import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../firebase";
import ContextType from "../../models/Context.type";
import FirebaseContext from "../../models/firebaseContext";
import Pages from "../../models/Pages";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./header.module.scss";

const Header = () => {
  const { auth, db } = useContext(FirebaseContext) as ContextType;
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(
          `fetchUserName method has error witch code ${e.message}`,
        );
      }
      throw new Error(`Unexpected error in fetchUserName ${e}`);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) navigate(Pages.login);
    if (user) fetchUserName();
  }, [user, loading]);

  return (
    <Wrapper>
      <header className={classes.header}>
        <p className={classes.logoutName}>{name}</p>
        <button type="button" className={classes.logOutButton} onClick={logOut}>
          LogOut
        </button>
      </header>
    </Wrapper>
  );
};

export default Header;
