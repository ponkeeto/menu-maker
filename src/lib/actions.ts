import { getDatabase, ref, set, get, remove } from "firebase/database";
import { cardState } from "./types";
import { app } from "./firebase-config";

const db = getDatabase(app);

const dbRef = ref(db, 'cards/')
const dbFetchRef = (id: number) => ref(db, `cards/${id}`)

const addCardFirebase = async (card: cardState) => {
  set(dbFetchRef(card.id), card)
    .then(() => console.log("201"))
    .catch((err) => console.log(err));
};

const getCardsFirebase = async () => {
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    console.log("200");
    return Object.values(snapshot.val());
  } else {
    console.log("500");
  }
};

const deleteFromFirebase = async (id: number) => {
  remove(dbFetchRef(id))
    .then(() => console.log("204"))
    .catch((err) => console.log(err));
};

export { addCardFirebase, getCardsFirebase, deleteFromFirebase, dbRef };
