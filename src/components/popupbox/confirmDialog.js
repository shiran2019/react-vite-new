import React from "react";
import { createRoot } from "react-dom/client";
import PopUpDialogBox from "./PopUpDailogBox";

export const confirmDialog = (message) => {
  return new Promise((resolve) => {
    const handleClose = (confirmed) => {
      root.unmount();
      resolve(confirmed);
    };

    const container = document.createElement("div");
    document.body.appendChild(container);

    const root = createRoot(container);

    root.render(
      <PopUpDialogBox
        show={true}
        setShow={(open) => !open}
        message={message}
        onConfirm={() => handleClose(true)}
      />
    );

    const handleCancel = () => handleClose(false);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleCancel();
      }
    });

    return () => {
      window.removeEventListener("keydown", handleCancel);
    };
  });
};
