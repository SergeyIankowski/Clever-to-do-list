import { DocumentData, QuerySnapshot } from "firebase/firestore";
import TodosCollection from "../models/TodosCollection";

const convertFirebaseDataToStoreData = (data: QuerySnapshot<DocumentData>) => {
  return data?.docs.reduce((acc: TodosCollection, doc) => {
    const obj = doc.data();
    const { arrayData } = obj;
    acc[doc.id] = JSON.parse(arrayData);
    return acc;
  }, {});
};

export default convertFirebaseDataToStoreData;
