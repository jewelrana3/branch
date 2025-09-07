import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  onClose?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function CustomButton({
  children,
  className = "",
  onClose,
  type = "button",
}: Props) {
  return (
    <button
      onClick={onClose}
      type={type}
      className={`cursor-pointer rounded-lg text-xl p-2 w-28  ${className}`}
    >
      {children}
    </button>
  );
}
