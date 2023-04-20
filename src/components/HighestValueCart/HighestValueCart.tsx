import { useEffect, useState } from "react";
import { Cart, Product, User } from "../../APIData.types";
import { CartWithOwner } from "./HighestValueCart.types";
import { getHighestValueCart } from "./HighestValueCart.helpers";
import { Box, Paper, Typography } from "@mui/material";

type HighestValueCartProps = {
  cartsData: Cart[];
  productsData: Product[];
  usersData: User[];
};

export const HighestValueCart = ({
  cartsData,
  productsData,
  usersData,
}: HighestValueCartProps) => {
  const [highestValueCart, setHighestValueCart] = useState<CartWithOwner>();
  useEffect(() => {
    setHighestValueCart(
      getHighestValueCart(cartsData, productsData, usersData)
    );
  }, [cartsData, productsData, usersData]);
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Task 3
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        Highest Value Cart:
      </Typography>
      <Box>
        <Typography sx={{ textAlign: "center" }} display="inline">
          Owner:
        </Typography>
        <Typography display="inline" sx={{ fontWeight: "bold" }}>
          {highestValueCart?.owner.firstname +
            " " +
            highestValueCart?.owner.lastname}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ textAlign: "center" }} display="inline">
          Value:
        </Typography>
        <Typography sx={{ fontWeight: "bold" }} display="inline">
          {highestValueCart?.value.toFixed(2)}
        </Typography>
      </Box>
    </Paper>
  );
};
