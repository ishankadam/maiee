import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

export default function ConfirmationModal(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleCancel}
      aria-labelledby="confirmation-modal-title"
      aria-describedby="confirmation-modal-description"
      className="modal-narrow"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        // alignItems="center"
        // p={2}
      >
        <DialogTitle
          id="confirmation-modal-title"
          variant="h5"
          sx={{
            fontFamily: "'Roboto Serif', serif",
            color: "#33376F",
            fontWeight: "bold",
            textAlign: { xs: "left", md: "left" },
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1rem",
              lg: "1.2rem",
            },
          }}
        >
          {props.title}
        </DialogTitle>
        <IconButton onClick={props.handleCancel}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      <DialogContent>
        <DialogContentText
          id="confirmation-modal-description"
          component="div"
          // align="center"
        >
          <Typography>Are you sure you want to delete this record?</Typography>
        </DialogContentText>
      </DialogContent>
      <Divider />

      <DialogActions sx={{ mt: 2 }}>
        <Button
          onClick={props.handleCancel}
          variant="outlined"
          color="success"
          className="confirmation-modal-cancel"
          sx={{ borderColor: "green", color: "green" }}
        >
          Cancel
        </Button>
        <Button
          onClick={props.handleConfirm}
          variant="contained"
          color="error"
          className="confirmation-modal-confirm"
          sx={{ backgroundColor: "red" }}
        >
          {props.isWithdrawal ? "Withdraw" : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
