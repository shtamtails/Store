export interface MiniCartMenuProps {
  onClose?: () => void;
}

export interface CartProducts {
  id: string;
  selectedAttributes?: any;
  amount: number;
}
