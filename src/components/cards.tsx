"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MenuCard } from ".";
import { Category, cardState } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";
import { getCardsFirebase } from "@/lib/actions";
import { getCardsFromFirebase } from "@/redux/slices/cardSlice";

export const Cards = ({ category }: { category: Category }) => {
  const cards = useAppSelector((state) => state.cards.cards ?? []);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCardsFromFirebase())
  }, [dispatch]);

  return cards
    .filter((card) => card?.category === category)
    .map((card) => <MenuCard key={card.id} info={card} />);
};
