import firebase from "firebase/app";

export interface Mission {
  name: string;
  pay?: number;
  minPay?: number;
  maxPay?: number;
  url?: string;
  docRef?: firebase.firestore.DocumentReference;
}
