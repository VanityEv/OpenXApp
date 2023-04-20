import React, { useEffect, useState } from "react";
import { User } from "../../APIData.types";
import { getGreatestDistanceUsers } from "./UserDistanceCounter.helpers";
import { Paper, Typography } from "@mui/material";

type UserDistanceCounterProps = {
  data: User[];
};

export const UserDistanceCounter = ({ data }: UserDistanceCounterProps) => {
  const [greatestDistanceUsers, setGreatestDistanceUsers] =
    useState<number[]>();
  useEffect(() => {
    setGreatestDistanceUsers(getGreatestDistanceUsers(data));
  }, [data]);

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Task 4
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        Users living furthest away from each other
      </Typography>

      {greatestDistanceUsers?.map((item, index) => (
        <Typography
          key={"user" + index + "dist"}
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {`User ${index + 1} ID : ${item}`}
        </Typography>
      ))}
    </Paper>
  );
};
