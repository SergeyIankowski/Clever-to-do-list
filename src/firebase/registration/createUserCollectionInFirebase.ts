import { User } from "firebase/auth";
import { doc, Firestore, setDoc } from "firebase/firestore";
import getMonthDayAndWeekDayName from "../../utils/getMonthDayAndWeekDayName";

const createUserCollectionInFirebase = async (db: Firestore, user: User) => {
  const { dateString } = getMonthDayAndWeekDayName(new Date());
  const docRef = doc(db, user.uid, dateString);
  await setDoc(docRef, { arrayData: "[]" });
};

export default createUserCollectionInFirebase;
