import styles from "./page.module.css";
import { AddItem, AddItemModal, Cards, Title } from "../components";
import { Container, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container className={styles.main}>
      <Title />
      <Typography variant="h4" gutterBottom margin={2}>
        Appetizers
      </Typography>
      <Grid container className={styles.grid}>
        <Cards category="appetizer" />
        <AddItem category="appetizer" />
      </Grid>
      <Typography variant="h4" gutterBottom margin={2}>
        Entrees
      </Typography>
      <Grid className={styles.grid}>
        <Cards category="entree" />
        <AddItem category="entree" />
      </Grid>
      <Typography variant="h4" gutterBottom margin={2}>
        Sides
      </Typography>
      <Grid className={styles.grid}>
        <Cards category="side" />
        <AddItem category="side" />
      </Grid>
      <Typography variant="h4" gutterBottom margin={2}>
        Desserts
      </Typography>
      <Grid className={styles.grid}>
        <Cards category="dessert" />
        <AddItem category="dessert" />
      </Grid>
      <Typography variant="h4" gutterBottom margin={2}>
        Beverages
      </Typography>
      <Grid className={styles.grid}>
        <Cards category="beverage" />
        <AddItem category="beverage" />
      </Grid>
      <AddItemModal />
    </Container>
  );
}
