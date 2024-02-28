"use client";
import { useAppSelector } from "@/redux/hooks";
import { MenuCard } from ".";
import { Category } from "@/lib/types";

export const Cards = ({ category }: { category: Category }) => {
  const cards = useAppSelector((state) => state.cards.cards);

  return cards
    .filter((card) => card.category === category)
    .map((card) => <MenuCard key={card.id} info={card} />);
};
