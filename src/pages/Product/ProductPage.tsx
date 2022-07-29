import { useQuery } from "@apollo/client";
import { FETCH_PRODUCT_INFO_BY_ID } from "apollo/queries/storeAPI";
import { Button } from "components/UI/Button/Button";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { IProduct } from "interface/IStore";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { addItemToCart, increaseAmount } from "store/slices/cart";
import { ICartItems } from "interface/ICart";
import { Loader } from "components/UI/Loader/Loader";
import { getTotalAmount } from "utils/getTotalAmount";

export interface ISelectedAttributes {
  [key: string]: string;
}

export const ProductPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [selectedAttributes, setSelectedAttributes] = useState<ISelectedAttributes>({});
  // get id passed by react router
  const params = useParams();
  const id = params.id!;
  // get cart array from react redux
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store.cart);
  // get product info by id
  const { data, loading } = useQuery(FETCH_PRODUCT_INFO_BY_ID, {
    variables: {
      id: id,
    },
  });
  const { price, currency } = useGetPriceById(id);
  const productInfo: IProduct = data?.product;
  const attributes = productInfo?.attributes;
  const handleOptionClick = (name: string, value: string) => {
    setSelectedAttributes({
      ...selectedAttributes,
      [name]: value,
    });
  };

  const handleAddToCart = () => {
    const item = {
      orderId: id + JSON.stringify(selectedAttributes), // Unique id for item with specified attributes
      id: id,
      attributes: selectedAttributes,
      amount: 1,
      price: productInfo.prices,
    };

    const order: ICartItems = cart.filter((el: ICartItems) => el.orderId === item.orderId)[0]; // check if order already exist
    order ? dispatch(increaseAmount(item.orderId)) : dispatch(addItemToCart(item)); // if order with orderid and attributes exists increase amount, else add item
  };

  const handleSmallImageClick = (id: number) => {
    setCurrentImage(id);
  };

  // used to place in description HTML code, funciton below sanitizes it from dangerous/malwarous code
  const sanitizedDescription = () => ({
    __html: DOMPurify.sanitize(productInfo?.description),
  });

  return (
    <>
      {loading && (
        <div className="loader-container">
          <Loader size={200} thickness={13} color="#eaeaea" />
        </div>
      )}
      <div className="container">
        <div className="item">
          <div className="item-images">
            <div className="item-images-small">
              {productInfo?.gallery.map((el, i) => (
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
              ))}
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
                      <Button
                        key={el.id}
                        size="sm"
                        type="outline"
                        className="mg-r-sm"
                        color={selectedAttributes[attribute.name] === el.value ? "black" : ""}
                        onClick={() => {
                          handleOptionClick(attribute.name, el.value);
                        }}
                      >
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
                        onClick={() => {
                          handleOptionClick(attribute.name, el.value);
                        }}
                        selected={selectedAttributes[attribute.name] === el.value}
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
              <Button
                type="primary"
                color="green"
                size="md"
                fullWidth
                onClick={() => {
                  handleAddToCart();
                }}
              >
                ADD TO CART
              </Button>
            </div>
            <div className="item-info-description" dangerouslySetInnerHTML={sanitizedDescription()} />
          </div>
        </div>
      </div>
    </>
  );
};
