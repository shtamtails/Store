import { Button } from "components/UI/Button/Button";
import { useAppDispatch } from "hooks/redux";
import { memo } from "react";
import { decreaseAmount, increaseAmount, removeProductFromCart } from "store/slices/cart";
import { getUniqueProductId } from "utils/getUniqueProductId";

interface QtyButtonsProps {
  amount: number;
  size?: string;
  id: string;
  attributes: object;
  padding?: string;
}

export const QtyButtons: React.FC<QtyButtonsProps> = memo(({ amount, size, id, attributes, padding }) => {
  const dispatch = useAppDispatch();
  const uniqueId = getUniqueProductId(id, attributes);

  const handleQtyPlusClick = () => {
    dispatch(increaseAmount(uniqueId));
  };

  const handleQtyMinusClick = () => {
    amount === 1 && dispatch(removeProductFromCart(uniqueId));
    dispatch(decreaseAmount(uniqueId));
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
});
