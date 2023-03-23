import { User } from "firebase/auth";
import { collection, Firestore, getDocs } from "firebase/firestore";
import convertFirebaseDataToStoreData from "../../utils/convertFirebaseDataToStoreData";
import { todosCollectionSlice } from "../reducers/todosCollectionSlice";
import { AppDispatch } from "../store";

const initStoreFromRequest = (db: Firestore, user: User) => async (dispatch: AppDispatch) => {
  const { setCollection } = todosCollectionSlice.actions;
  const docRef = collection(db, user.uid);
  const snapshot = await getDocs(docRef);
  const data = convertFirebaseDataToStoreData(snapshot);

  dispatch(setCollection({ todosCollection: data }));
};

export default initStoreFromRequest;
