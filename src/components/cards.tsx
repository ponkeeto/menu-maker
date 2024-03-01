"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MenuCard } from ".";
import { Category } from "@/lib/types";
import { useEffect } from "react";
import { getCardsFromFirebase } from "@/redux/slices/cardSlice";
import { onValue } from "firebase/database";
import { dbRef } from "@/lib/actions";

export const Cards = ({ category }: { category: Category }) => {
  const cards = useAppSelector((state) => state.cards.cards ?? []);
  const dispatch = useAppDispatch()

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      dispatch(getCardsFromFirebase())
    })
    dispatch(getCardsFromFirebase())
  }, [dispatch]);

  return cards
    .filter((card) => card?.category === category)
    .map((card) => <MenuCard key={card.id} info={card} />);
};
