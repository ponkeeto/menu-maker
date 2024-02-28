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
      onClick={() => dispatch(toggleState("new"))}
      className={styles.card}
    >
      <Typography>+</Typography>
    </Button>
  );
};
