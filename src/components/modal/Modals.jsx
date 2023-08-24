import { useContext } from "react";
import {
  ModalsDispatchContext,
  ModalsStateContext,
} from "../../context/ModalsContext";
import Modal from "./Modal";

export const modals = {
  Modal: Modal,
};

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;
    const onClose = () => {
      close(Component);
    };

    return (
      <Component
        key={index}
        {...restProps}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    );
  });
};

export default Modals;
