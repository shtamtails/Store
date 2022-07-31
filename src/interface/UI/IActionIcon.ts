export interface ActionIconProps {
  innerRef?: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
  children: JSX.Element | string;
  type?: "hover" | "outline";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
}
