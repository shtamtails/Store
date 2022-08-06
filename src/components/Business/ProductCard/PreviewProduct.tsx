import { Cart } from "components/UI/Icons/Cart";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { memo } from "react";

interface IPreviewProduct {
  id: string;
  image: string;
  brand: string;
  name: string;
  attributes: object[];
}

export const PreviewProduct: React.FC<IPreviewProduct> = memo(({ id, image, brand, name, attributes }) => {
  const { currency, loading, price } = useGetPriceById(id);

  return (
    <div className="content-card">
      <div className="content-card-image">
        <img src={image} alt="" />
      </div>
      <div className="content-card-cart-btn">
        <Cart color="#fff" />
      </div>
      <div className="content-card-info">
        <div className="content-card-title">
          {brand} {name}
        </div>
        <div className="content-card-price">
          {currency} {price}
        </div>
      </div>
    </div>
  );
});
