import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

type ErrorMessageType = {
  message: string;
};
export const ErrorMessage = ({ message }: ErrorMessageType) => {
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
      <ErrorIcon color="error" sx={{ fontSize: "3rem" }} />
      <Typography sx={{ textAlign: "center" }}>{message}</Typography>
    </Box>
  );
};
