import { Button, Modal } from "antd";
import React from "react";
import success from "../images/success.svg";
import failed from "../images/warning.svg";

const EmailResponseModal = ({ open, setOpen, status }) => {
  return (
    <Modal open={open} centered footer={false} onCancel={() => setOpen(!open)}>
      <img src={status === 200 ? success : failed} alt="" className="mx-auto" />
      <p className="text-center mb-10 text-xl">
        {status === 200
          ? "Mail sent successfully, I'll be in touch as soon as possible"
          : "Oops! Something went wrong, kindly try again later"}
      </p>
      <Button
        type="primary"
        className="bg-[#42446E] flex items-center justify-center py-5 px-10 mx-auto"
        onClick={() => setOpen(!open)}
      >
        Continue
      </Button>
    </Modal>
  );
};

export default EmailResponseModal;
