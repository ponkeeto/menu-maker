"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { toggleState } from "@/redux/slices/toggleSlice";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import { addCount } from "@/redux/slices/cardSlice";
import { Category, cardState } from "@/lib/types";
import { addCardFirebase, deleteFromFirebase } from "@/lib/actions";

export const AddItemModal = () => {
  const {
    open,
    category,
    id: cardId,
  } = useAppSelector((state) => state.toggle);
  const itemToEdit = useAppSelector(
    (state) => state.cards.cards.find((card) => card.id === cardId) as cardState
  );
  const count = useAppSelector((state) => state.cards.count);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);

  useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.name);
      setPrice(itemToEdit.price);
      setCost(itemToEdit.cost);
      setStock(itemToEdit.stock);
    } else {
      setTitle("");
      setPrice(0);
      setCost(0);
      setStock(0);
    }
  }, [itemToEdit]);

  const handleSubmit = () => {
    const itemToAdd = {
      id: open === "new" ? count + 1 : (cardId as number),
      name: title,
      category: category as Category,
      price: price,
      cost: cost,
      options: [""],
      stock: stock,
    };
    addCardFirebase(itemToAdd);
    dispatch(addCount());
    dispatch(toggleState({ open: "close" }));
  };

  const handleDelete = () => {
    deleteFromFirebase(itemToEdit.id);
    dispatch(toggleState({ open: "close" }));
  };

  return (
    <Modal
      open={open !== "close"}
      onClose={() => dispatch(toggleState({ open: "close" }))}
    >
      <Grid
        container
        style={{
          background: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          border: "2px solid #000",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
        }}
      >
        <FormControl onSubmit={handleSubmit}>
          <FormLabel>
            {open === "new" ? "Add new" : "Edit"} {category}
          </FormLabel>
          <TextField
            label="Title"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            margin="dense"
          />
          <TextField
            label="Price"
            value={price}
            placeholder="Enter Price"
            onChange={(e) => setPrice(Number(e.target.value))}
            margin="dense"
          />
          <TextField
            label="Cost"
            value={cost}
            placeholder="Enter Cost"
            onChange={(e) => setCost(Number(e.target.value))}
            margin="dense"
          />
          <TextField
            label="Stock"
            value={stock}
            placeholder="Enter Stock"
            onChange={(e) => setStock(Number(e.target.value))}
            margin="dense"
          />
          <Button type="submit" onClick={handleSubmit}>
            Save
          </Button>
          {open === "edit" && (
            <Button type="submit" onClick={handleDelete} color="warning">
              Delete
            </Button>
          )}
        </FormControl>
      </Grid>
    </Modal>
  );
};
