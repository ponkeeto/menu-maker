import styles from "./page.module.css";
import { AddItem, AddItemModal, Cards, Title } from "../components";
import { Container, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container className={styles.main}>
      <Title />
      <Typography>Appetizers</Typography>
      <Grid container className={styles.grid}>
        <Cards category="appetizer" />
        <AddItem category="appetizer" />
      </Grid>
      <Typography>Entrees</Typography>
      <Grid className={styles.grid}>
        <Cards category="entree" />
        <AddItem category="entree" />
      </Grid>
      <Typography>Sides</Typography>
      <Grid className={styles.grid}>
        <Cards category="side" />
        <AddItem category="side" />
      </Grid>
      <Typography>Desserts</Typography>
      <Grid className={styles.grid}>
        <Cards category="dessert" />
        <AddItem category="dessert" />
      </Grid>
      <Typography>Beverages</Typography>
      <Grid className={styles.grid}>
        <Cards category="beverage" />
        <AddItem category="beverage" />
      </Grid>
      <AddItemModal />
    </Container>
  );
}
