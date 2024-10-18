import clsx from "clsx";
import React, { FC } from "react";
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme: "primary" | "secondary";
}
export const Button: FC<IButton> = ({ children, className, theme, ...props }) => {
  const primaryClass = "border-2 border-white text-white hover:bg-black hover:border-none";
  const secondaryClass = " bg-custom-purple-100 text-white hover:bg-custom-purple-100 border-none";
  const parentClass = className ?className : ""
  return (
    <button
      className={clsx("py-2 px-2 rounded-md text-sm md:text-base md:py-4 md:px-4 md:rounded-lg", {
        [parentClass]: className,
        [primaryClass]: theme === "primary",
        [secondaryClass]: theme === "secondary"
      })}
      {...props}
    >
      {children}
    </button>
  );
};
