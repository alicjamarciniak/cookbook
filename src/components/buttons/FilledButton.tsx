import { FC } from "react";

interface FilledButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size" | "type"> {
  size?: "sm" | "md" | "lg";
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const FilledButton: FC<FilledButtonProps> = ({
  size = "lg",
  bgColor,
  textColor = "dark-white",
  className,
  children,
  ...rest
}) => {
  const sizeStyles = {
    sm: `text-sm py-2 px-7`,
    md: `text-md py-2 px-10`,
    lg: `text-lg py-4 px-14`,
  }[size];

  return (
    <button
      className={`flex gap-4 justify-center rounded-full ${sizeStyles}
       ${
         bgColor ? `bg-${bgColor}` : "bg-light-orange"
       } text-${textColor} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default FilledButton;
