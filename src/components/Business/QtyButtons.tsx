import { Button } from "components/UI/Button/Button";
import { useAppDispatch } from "hooks/redux";
import { decreaseAmount, increaseAmount } from "store/slices/cart";
import { getUniqueProductId } from "utils/getUniqueProductId";

interface QtyButtonsProps {
  amount: number;
  size?: string;
  id: string;
  attributes: object;
  padding?: string;
}

export const QtyButtons: React.FC<QtyButtonsProps> = ({ amount, size, id, attributes, padding }) => {
  const dispatch = useAppDispatch();

  const handleQtyPlusClick = () => {
    dispatch(increaseAmount(getUniqueProductId(id, attributes)));
  };

  const handleQtyMinusClick = () => {
    dispatch(decreaseAmount(getUniqueProductId(id, attributes)));
  };

  return (
    <div className="qty-buttons" style={{ padding: padding }}>
      <Button type="outline" size="sm" height={size} width={size} onClick={() => handleQtyPlusClick()}>
        +
      </Button>
      {amount}
      <Button type="outline" size="sm" height={size} width={size} onClick={handleQtyMinusClick}>
        -
      </Button>
    </div>
  );
};
