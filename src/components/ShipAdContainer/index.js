import React from "react";
import { Modal, Button, ButtonGroup } from "@veneer/core";

const ShipAdContainer = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Button appearance="secondary" onClick={() => setOpen(true)}>
        Add New Address
      </Button>

      <Modal
        className="modal-font"
        align="start"
        id="modal-id"
        show={open}
        onClose={() => setOpen(false)}
        save
        button
        can
        go
        here
        footer={
          <ButtonGroup>
            <Button>Save</Button>
          </ButtonGroup>
        }
        title="Add Shipping Address"
      >
        Personal and shipping address goe here
      </Modal>
    </div>
  );
};
export default ShipAdContainer;
