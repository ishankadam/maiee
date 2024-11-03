import { Typography } from "@mui/material";
import React from "react";
import CustomModal from "./customModal";

export default function ConfirmationModal(props) {
  return (
    <CustomModal
      className="modal-narrow"
      open={props.open}
      title={{
        label: props.title,
        variant: "h2",
        id: "confirmation-modal-title",
      }}
      primaryButton={{
        isRequired: true,
        label: props.isWithdrawal ? "Yes, withdraw" : "Yes, Delete",
        handler: props.handleConfirm,
        className: "confirmation-modal-confirm",
        color: "error",
      }}
      secondaryButton={{
        isRequired: true,
        label: "No, cancel",
        handler: props.handleCancel,
        className: "confirmation-modal-cancel",
      }}
      isConfirmation={true}
    >
      <Typography id="confirmation-modal-description">
        {props.message}
      </Typography>
    </CustomModal>
  );
}
