import { Cart } from "components/UI/Icons/Cart";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { useAppSelector } from "hooks/redux";
import { IPreviewProduct } from "interface/IPreviewProduct";

export const PreviewProduct: React.FC<IPreviewProduct> = ({ id, image, brand, name }) => {
  const { currency } = useAppSelector((store) => store.settings);
  const { price } = useGetPriceById(id);

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
};
