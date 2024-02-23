import { cardState } from "@/redux/slices/cardSlice";
import styles from "../app/page.module.css";

export const MenuCard = (props: { info: cardState }) => {
  const { name, category, price, cost, options, stock } = props.info;
  return (
    <a href="/" className={styles.card}>
      <h2>{name}</h2>
      <p>{category}</p>
      <p>Price: {price}</p>
      <p>Cost: {cost}</p>
      <p>Options: {options}</p>
      <p>Stock: {stock}</p>
    </a>
  );
};
