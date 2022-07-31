export interface ButtonProps {
  children?: string | JSX.Element;
  color?: "green" | "black" | "";
  type?: "primary" | "outline" | "color";
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: Function;
  className?: string;
  bgcolor?: string;
  selected?: boolean;
  height?: string;
  width?: string;
}
