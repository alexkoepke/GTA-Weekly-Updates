import firebase from "firebase";

export interface Vehicle {
  img?: string;
  manufacturer?: string;
  name: string;
  price?: number;
  tradePrice?: number;
  shop?: string;
  url?: string;
  docRef?: firebase.firestore.DocumentReference;
}
