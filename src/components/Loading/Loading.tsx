import { Box, CircularProgress, Typography } from "@mui/material";

type LoadingType = {
  message: string;
};
export const Loading = ({ message }: LoadingType) => {
  return (
    <Box
      sx={{
        position: "absolute",
        ml: "auto",
        mr: "auto",
        left: 0,
        right: 0,
        pt: 3,
        textAlign: "center",
      }}
    >
      <CircularProgress sx={{ minWidth: "3rem" }} />
      <Typography sx={{ textAlign: "center" }}>{message}</Typography>
    </Box>
  );
};
