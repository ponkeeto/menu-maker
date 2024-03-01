"use client";
import styles from "../app/page.module.css";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { changeTitle } from "@/redux/slices/titleSlice";
import { FormControl, TextField, Typography } from "@mui/material";

export const Title = () => {
  const { title } = useAppSelector((state) => state.title);
  const dispatch = useAppDispatch();

  return (
    <FormControl className={styles.center}>
      <TextField
        variant="outlined"
        value={title}
        onChange={(e) => dispatch(changeTitle(e.target.value))}
        className={styles.input}
      />
      <Typography>You can edit the title to your restaurant name!</Typography>
    </FormControl>
  );
};
