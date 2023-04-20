import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { Cart, Product, User } from "./APIData.types";
import { UserDistanceCounter } from "./components/UserDistanceCounter/UserDistanceCounter";
import { Grid } from "@mui/material";
import { CategoryTotalValues } from "./components/CategoryTotalValues/CategoryTotalValues";
import { HighestValueCart } from "./components/HighestValueCart/HighestValueCart";
import { Loading } from "./components/Loading/Loading";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

const APIData = () => {
  const [usersQuery, cartsQuery, productsQuery] = useQueries({
    queries: [
      {
        queryKey: ["usersData"],
        queryFn: () =>
          axios.get("https://fakestoreapi.com/users").then((res) => res.data),
      },
      {
        queryKey: ["cartsData"],
        queryFn: () =>
          axios
            .get(
              "https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["productsData"],
        queryFn: () =>
          axios
            .get("https://fakestoreapi.com/products")
            .then((res) => res.data),
      },
    ],
  });
  if (usersQuery.isLoading) return <Loading message="Loading users..." />;

  if (cartsQuery.isLoading) return <Loading message="Loading carts..." />;

  if (productsQuery.isLoading) return <Loading message="Loading products..." />;

  if (usersQuery.error instanceof Error)
    return <ErrorMessage message={usersQuery.error.message} />;

  if (cartsQuery.error instanceof Error)
    return <ErrorMessage message={cartsQuery.error.message} />;

  if (productsQuery.error instanceof Error)
    return <ErrorMessage message={productsQuery.error.message} />;

  return (
    <Grid
      container
      columns={3}
      columnGap={3}
      sx={{ justifyContent: "center", alignItems: "top", pt: 3 }}
    >
      <Grid item>
        {productsQuery.isSuccess && (
          <CategoryTotalValues data={productsQuery.data as Product[]} />
        )}
      </Grid>
      <Grid item>
        {cartsQuery.isSuccess && (
          <HighestValueCart
            cartsData={cartsQuery.data as Cart[]}
            productsData={productsQuery.data as Product[]}
            usersData={usersQuery.data as User[]}
          />
        )}
      </Grid>
      <Grid item>
        {usersQuery.isSuccess && (
          <UserDistanceCounter data={usersQuery.data as User[]} />
        )}
      </Grid>
    </Grid>
  );
};
export default APIData;
