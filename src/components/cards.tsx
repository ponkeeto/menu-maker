'use client'
import { useAppSelector } from "@/redux/hooks"
import { MenuCard } from "."

export const Cards = () => {
    const cards = useAppSelector((state) => state.cards.cards)

    return cards.map((card) => <MenuCard key={card.id} info={card} />)
}