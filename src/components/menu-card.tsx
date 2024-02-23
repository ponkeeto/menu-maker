import styles from "../app/page.module.css";

export const MenuCard = (props: object) => {
  return (
    <a
      href="/"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>Menu Item</h2>
      <p>Category</p>
      <p>Price</p>
      <p>Production Cost</p>
      <p>Options</p>
      <p>Stock</p>
    </a>
  );
};
