import { useRef } from "react";

export default function useDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();

  const close = () => {
    dialogRef.current?.close();
    // clear form when dialog is closed
    const form = dialogRef.current?.querySelector("form");

    form?.reset();
  };
  return { dialogRef, open, close };
}
