import { cardState } from "@/lib/types";
import styles from "../app/page.module.css";
import { useAppDispatch } from "@/redux/hooks";
import { toggleState } from "@/redux/slices/toggleSlice";
import { Button, Typography } from "@mui/material";

export const MenuCard = (props: { info: cardState }) => {
  const { id, name, category, price, cost, options, stock } = props.info;
  const dispatch = useAppDispatch();

  return (
    <Button
      className={styles.card}
      onClick={() =>
        dispatch(toggleState({ open: "edit", category: category, id: id }))
      }
    >
      <Typography variant="h5">{name}</Typography>
      <Typography>Price: {price}</Typography>
      <Typography>Cost: {cost}</Typography>
      <Typography>Options: {options.length}</Typography>
      <Typography>Stock: {stock}</Typography>
    </Button>
  );
};
