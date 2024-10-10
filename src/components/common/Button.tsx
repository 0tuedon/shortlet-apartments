import clsx from "clsx";
import React, { FC } from "react";
interface IButton {
  children: React.ReactNode;
  className?: string;
  theme: "primary" | "secondary";
}
export const Button: FC<IButton> = ({ children, className, theme }) => {
  const primaryClass = "border-2 border-white text-white hover:bg-black hover:border-none";
  const secondaryClass = " bg-custom-purple-100 text-white hover:bg-custom-purple-100 border-none";
  const parentClass = className ?className : ""
  return (
    <button
      className={clsx("py-4 px-4 rounded-lg", {
        [parentClass]: className,
        [primaryClass]: theme === "primary",
        [secondaryClass]: theme === "secondary"
      })}
    >
      {children}
    </button>
  );
};
