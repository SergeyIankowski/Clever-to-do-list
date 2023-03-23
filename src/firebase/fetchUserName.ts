import { User } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

const fetchUserName = async (user: User, callback: (str: string) => void) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0] ? doc.docs[0].data() : { name: "...loading" };

    callback(data.name);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`fetchUserName method has error witch code ${e.message}`);
    }
    throw new Error(`Unexpected error in fetchUserName ${e}`);
  }
};

export default fetchUserName;
