import { DocumentData, QuerySnapshot } from "firebase/firestore";

const convertFirebaseDataToStoreData = (data: QuerySnapshot<DocumentData>) => {
  return data?.docs.reduce((acc: any, doc) => {
    const obj = doc.data();
    const { arrayData } = obj;
    acc[doc.id] = JSON.parse(arrayData);
    return acc;
  }, {});
};

export default convertFirebaseDataToStoreData;
