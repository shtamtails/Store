import { useQuery } from "@apollo/client";
import { FETCH_PRODUCT_INFO_BY_ID } from "apollo/queries/storeAPI";
import { Button } from "components/UI/Button/Button";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { IProduct } from "interface/IStore";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

export const Item: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const params = useParams();
  const id = params.id!;
  const { price, currency } = useGetPriceById(id);

  const { data } = useQuery(FETCH_PRODUCT_INFO_BY_ID, {
    variables: {
      id: id,
    },
  });
  const productInfo: IProduct = data?.product;
  const attributes = productInfo?.attributes;

  const handleSmallImageClick = (id: number) => {
    setCurrentImage(id);
  };

  const sanitizedDescription = () => ({
    __html: DOMPurify.sanitize(productInfo?.description),
  });

  return (
    <div className="container">
      <div className="item">
        <div className="item-images">
          <div className="item-images-small">
            {productInfo?.gallery.map((el, i) => {
              return (
                <div key={i} className="item-images-small-image">
                  <img
                    key={i}
                    src={el}
                    alt=""
                    onClick={() => {
                      handleSmallImageClick(i);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="item-images-full">
            <img src={productInfo?.gallery[currentImage]} alt="" />
          </div>
        </div>
        <div className="item-info">
          <div className="item-info-title">{productInfo?.brand}</div>
          <div className="item-info-name">{productInfo?.name}</div>
          {attributes?.map((attribute) => (
            <div key={attribute.id} className="item-info-setting-container">
              {attribute.name}
              <div className="item-info-setting-content">
                {attribute?.type === "text" &&
                  attribute?.items.map((el) => (
                    <Button key={el.id} size="sm" type="outline" className="mg-r-sm">
                      {el.displayValue}
                    </Button>
                  ))}

                {attribute?.type === "swatch" &&
                  attribute?.items.map((el) => (
                    <Button
                      key={el.id}
                      size="sm"
                      type="color"
                      bgcolor={el.value}
                      className="mg-r-sm"
                      height={32}
                      width={32}
                      // selected
                    />
                  ))}
              </div>
            </div>
          ))}

          <div className="item-info-price">
            PRICE: {currency} {price}
            <div className="item-info-price-total"></div>
          </div>
          <div className="item-info-checkout">
            <Button type="primary" color="green" size="md" fullWidth>
              ADD TO CART
            </Button>
          </div>
          <div className="item-info-description" dangerouslySetInnerHTML={sanitizedDescription()} />
        </div>
      </div>
    </div>
  );
};
