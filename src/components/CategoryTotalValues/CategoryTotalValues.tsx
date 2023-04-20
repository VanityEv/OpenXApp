import React, { useEffect, useState } from "react";
import { Product } from "../../APIData.types";
import { getCategoryValue } from "./CategoryTotalValues.helpers";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

type CategoryTotalValuesProps = {
  data: Product[];
};

export const CategoryTotalValues = ({ data }: CategoryTotalValuesProps) => {
  const [categoryTotalValues, setCategoryTotalValues] = useState<
    Map<string, number>
  >(new Map());
  useEffect(() => {
    setCategoryTotalValues(getCategoryValue(data));
  }, [data]);
  let categories: Array<React.ReactNode> = [];
  categoryTotalValues.forEach((value, key) =>
    categories.push(
      <TableRow key={"category-row-" + key}>
        <TableCell sx={{ textAlign: "center" }} key={"category-" + key}>
          {key}
        </TableCell>
        <TableCell sx={{ textAlign: "center" }} key={"value-" + value}>
          {value}
        </TableCell>
      </TableRow>
    )
  );
  return (
    <Paper elevation={3} sx={{ pt: 3 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Task 2
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        Categories and their total values
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                key="category-header"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Category
              </TableCell>
              <TableCell
                key="value-header"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Total Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{categories.map((item) => item)}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
