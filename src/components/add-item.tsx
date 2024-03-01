"use client";
import { useAppDispatch } from "@/redux/hooks";
import styles from "../app/page.module.css";
import { toggleState } from "@/redux/slices/toggleSlice";
import { Category } from "@/lib/types";
import { Button, Typography } from "@mui/material";

export const AddItem = ({ category }: { category: Category }) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() =>
        dispatch(toggleState({ open: "new", category: category, id: null }))
      }
      className={styles.card}
    >
      <Typography variant="h5">Add new {category}</Typography>
    </Button>
  );
};
