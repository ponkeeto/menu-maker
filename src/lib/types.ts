export type Category = "appetizer" | "entree" | "side" | "dessert" | "beverage";

export interface cardState {
  id: number;
  name: string;
  category: Category;
  price: number;
  cost: number;
  options: string[];
  stock: number;
}

export interface itemsState {
  count: number;
  cards: cardState[];
}

export type OpenType = "new" | "edit" | "close";

export interface ToggleState {
  open: OpenType;
  category?: Category;
  id?: number | null;
}
