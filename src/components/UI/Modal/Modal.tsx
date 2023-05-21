"use client";
import { useEffect, forwardRef } from "react";
import classes from "./Modal.module.css";
import { PrimaryButton } from "../Button/PrimaryButton";

type Props = {
  children: React.ReactNode;
  title: string;
  ref: React.RefObject<HTMLDialogElement>;
};

const Modal = forwardRef(function Modal({ children, title, ref }: Props) {
  useEffect(() => {
    const modal = ref?.current;
    if (modal) {
      modal.addEventListener("close", () => {
        document.body.style.overflow = "auto";
      });

      modal.addEventListener("show", () => {
        document.body.style.overflow = "hidden";
      });
    }
  }, [ref]);

  const closeModalHandler = () => {
    ref.current?.close();
  };

  return (
    <>
      <dialog ref={ref} className={classes.container}>
        <h1>{title}</h1>
        {children}

        <PrimaryButton size="large" text="Close" className="mt-6 ml-auto" />
      </dialog>
    </>
  );
});

export { Modal, Modal as default };
