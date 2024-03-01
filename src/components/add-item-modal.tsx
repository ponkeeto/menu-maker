"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toggleState } from "@/redux/slices/toggleSlice";
import {
  Button,
  Chip,
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
  const [options, setOptions] = useState<string[]>([]);
  const [stock, setStock] = useState<number>(0);

  useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.name);
      setPrice(itemToEdit.price);
      setCost(itemToEdit.cost);
      setOptions(itemToEdit.options);
      setStock(itemToEdit.stock);
    } else {
      setTitle("");
      setPrice(0);
      setCost(0);
      setOptions([]);
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
      options: options,
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
        justifyContent='center'
        alignItems='center'
        padding={4}
        style={{
          background: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          border: "2px solid #000",
          borderRadius: "10px",
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
          <Options options={options} setOptions={setOptions} />
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

const Options = ({
  options,
  setOptions,
}: {
  options: string[];
  setOptions: Dispatch<SetStateAction<string[]>>;
}) => {
  const [chip, setChip] = useState<string>("");

  const handleDelete = (deletedChip: string) => () => {
    setOptions((options) => options.filter((option) => option !== deletedChip));
  };

  const handleAdd = (AddedChip: string) => () => {
    setOptions((options) => [...options, AddedChip]);
    setChip('')
  };

  return (
    <Grid container justifyContent="center" flexDirection="column" marginY={3} gap={2}>
      <Grid item>
        {options.map((option, idx) => {
          return (
            <Chip key={idx} label={option} onDelete={handleDelete(option)} />
          );
        })}
      </Grid>
      <Grid item alignItems='center' justifyContent='center'>
        <TextField
          label="Add option"
          value={chip}
          onChange={(e) => setChip(e.target.value)}
        />
        <Button onClick={handleAdd(chip)}>ADD CHIP</Button>
      </Grid>
    </Grid>
  );
};
