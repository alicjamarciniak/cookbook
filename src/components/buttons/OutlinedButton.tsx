import { FC } from "react";

interface OutlinedButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size" | "type"> {
  size?: "sm" | "md" | "lg";
  bgColor?: string;
  color?: string;
  className?: string;
}

const OutlinedButton: FC<OutlinedButtonProps> = ({
  size = "lg",
  bgColor = "transparent",
  color = "light-orange",
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
      className={`border flex gap-4 justify-center rounded-full ${sizeStyles}
      bg-${bgColor} text-${color} border-${color} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
