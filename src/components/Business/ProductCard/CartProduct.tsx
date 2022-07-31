import { Button } from "components/UI/Button/Button";
import { Slider } from "components/UI/Slider/Slider";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { IProductCard } from "interface/ICart";
import { Link } from "react-router-dom";
import { QtyButtons } from "../QtyButtons";

export const CartProduct: React.FC<IProductCard> = ({
  id,
  selectedAttributes,
  amount,
  name,
  gallery,
  attributes,
  brand,
}) => {
  const { price, currency, loading } = useGetPriceById(id);

  return (
    <>
      <div className="cart-product-card">
        <>
          <div className="cart-product-card-left">
            <Link to={`/product/${id}`}>
              <div className="cart-product-card-brand">{brand}</div>
              <div className="cart-product-card-name">{name}</div>
            </Link>
            <div className="cart-product-card-price">
              {loading ? (
                <>{currency} ...</>
              ) : (
                <>
                  {currency} {price}
                </>
              )}
            </div>
            {attributes?.map((attribute) => {
              return (
                <div key={attribute.id} className="cart-product-card-settings">
                  {attribute?.name}
                  <div className="cart-product-card-buttons">
                    {attribute?.type === "text" &&
                      attribute?.items.map((el) => (
                        <Button
                          key={el.id}
                          size="sm"
                          type="outline"
                          className="mg-r-sm"
                          color={selectedAttributes[attribute.name] === el.value ? "black" : ""}
                        >
                          {el.displayValue}
                        </Button>
                      ))}
                    {attribute?.type === "swatch" &&
                      attribute?.items.map((el) => (
                        <Button
                          key={el.id}
                          size="xs"
                          type="color"
                          bgcolor={el.value}
                          className="mg-r-sm"
                          height="24px"
                          width="24px"
                          selected={selectedAttributes[attribute.name] === el.value}
                        />
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-product-card-right">
            <QtyButtons amount={amount} size="45px" padding="0 20px" id={id} attributes={selectedAttributes} />
            <div className="cart-product-card-image">
              <Slider items={gallery} />
            </div>
          </div>
        </>
      </div>
    </>
  );
};
