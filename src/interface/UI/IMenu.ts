export interface MenuProps {
  parentRef: React.RefObject<HTMLDivElement>;
  visible: boolean;
  children: JSX.Element;
  offsetLeft?: number;
  offsetTop?: number;
  innerRef?: React.RefObject<HTMLDivElement>;
}
