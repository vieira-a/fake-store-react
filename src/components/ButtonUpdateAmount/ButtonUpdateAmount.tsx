import { ReactNode } from "react";

export interface ButtonUpdateAmountProps {
  children?: ReactNode;
  onClick?: any;
  id?: any;
}

export function ButtonUpdateAmount({
  children,
  onClick,
  id,
}: ButtonUpdateAmountProps) {
  return <button onClick={onClick}>{children}</button>;
}
