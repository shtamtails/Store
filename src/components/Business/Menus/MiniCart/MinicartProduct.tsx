import { QtyButtons } from "components/Business/QtyButtons";
import { Button } from "components/UI/Button/Button";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { IProductCard } from "interface/ICart";

export const MinicartProduct: React.FC<IProductCard> = ({
  id,
  selectedAttributes,
  amount,
  name,
  gallery,
  attributes,
  brand,
}) => {
  const { price, currency } = useGetPriceById(id);

  return (
    <div className="cart-menu-card">
      <div className="cart-menu-card-info">
        <div className="cart-menu-card-name">
          {brand} {name}
        </div>
        <div className="cart-menu-card-price">
          <span>
            {currency} {price}
          </span>
        </div>
        {attributes?.map((attribute) => (
          <div key={attribute.id} className="cart-menu-card-setting">
            {attribute?.name}
            <div className="cart-menu-card-setting-buttons">
              {attribute?.type === "text" &&
                attribute?.items.map((el) => (
                  <Button
                    key={el.id}
                    type="outline"
                    className="mg-r-sm "
                    color={selectedAttributes[attribute.name] === el.value ? "black" : ""}
                    height="24px"
                  >
                    {el.value}
                  </Button>
                ))}

              {attribute?.type === "swatch" &&
                attribute?.items.map((el) => (
                  <Button
                    key={el.id}
                    size="sm"
                    type="color"
                    className="mg-r-sm"
                    bgcolor={el.value}
                    selected={selectedAttributes[attribute.name] === el.value}
                    width="16px"
                    height="16px"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="minicart-right-section">
        <QtyButtons amount={amount} size="24px" padding="2px 8px" id={id} attributes={selectedAttributes} />
        <div className="minicart-image">
          <img src={gallery[0]} alt={name} />
        </div>
      </div>
    </div>
  );
};
