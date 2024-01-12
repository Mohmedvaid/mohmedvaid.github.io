import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import HandGesture from "../components/HandGesture";

const FunPage = () => {
  const [open, setOpen] = useState(true);

  const handleToggleDialog = () => setOpen(!open);

  return (
    <Box sx={{ height: "100vh" }} component="section" id="fun">
      <IconButton onClick={handleToggleDialog}>
        <InfoIcon />
      </IconButton>
      <Dialog open={open} onClose={handleToggleDialog}>
        <DialogTitle>{"Hand Gesture Detection"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a fun application to detect hand gestures. No data is
            tracked or saved.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <HandGesture />
    </Box>
  );
};

export default FunPage;
