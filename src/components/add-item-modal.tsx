"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import styles from "../app/page.module.css";
import { useRef, useState } from "react";
import { toggleState } from "@/redux/slices/toggleSlice";

export const AddItemModal = () => {
  const open = useAppSelector((state) => state.toggle.open);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(title);
    dispatch(toggleState("close"));
  };

  return (
    open !== "close" && (
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type='number'
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>
          <button type="submit">
            Save {open === "edit" ? "Changes" : "New Food Item"}
          </button>
        </form>
      </div>
    )
  );
};
