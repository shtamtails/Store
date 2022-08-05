import { useQuery } from "@apollo/client";
import { FETCH_PRODUCT_INFO_BY_ID } from "apollo/queries/storeAPI";
import { Button } from "components/UI/Button/Button";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { IProduct } from "interface/API_Model";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { Loader } from "components/UI/Loader/Loader";
import { addProductToCart, increaseAmount } from "store/slices/cart";
import { ICartProduct } from "interface/ICart";
import { getUniqueProductId } from "utils/getUniqueProductId";

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
  const { price, currency, loading: priceLoading } = useGetPriceById(id);
  const productInfo: IProduct = data?.product;
  const attributes = productInfo?.attributes;
  const handleOptionClick = (name: string, value: string) => {
    setSelectedAttributes({
      ...selectedAttributes,
      [name]: value,
    });
  };

  const handleAddToCart = () => {
    const product = {
      orderId: getUniqueProductId(id, selectedAttributes),
      id,
      selectedAttributes,
      amount: 1,
      prices: productInfo.prices,
      inStock: productInfo.inStock,
      gallery: productInfo.gallery,
      description: productInfo.description,
      category: productInfo.category,
      attributes: productInfo.attributes,
      brand: productInfo.brand,
      name: productInfo.name,
    };

    const order: ICartProduct = cart?.filter((el: ICartProduct) => el.orderId === product.orderId)[0]; // check if order already exist
    order ? dispatch(increaseAmount(product.orderId)) : dispatch(addProductToCart(product)); // if order with orderid and attributes exists increase amount, else add product
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
        <div className="product">
          <div className="product-images">
            <div className="product-images-small">
              {productInfo?.gallery.map((el, i) => (
                <div key={i} className="product-images-small-image">
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
            <div className="product-images-full">
              <img src={productInfo?.gallery[currentImage]} alt="" />
            </div>
          </div>
          <div className="product-info">
            <div className="product-info-title">{productInfo?.brand}</div>
            <div className="product-info-name">{productInfo?.name}</div>
            {attributes?.map((attribute) => (
              <div key={attribute.id} className="product-info-setting-container">
                {attribute.name}
                <div className="product-info-setting-content">
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
                        height="32px"
                        width="32px"
                        onClick={() => {
                          handleOptionClick(attribute.name, el.value);
                        }}
                        selected={selectedAttributes[attribute.name] === el.value}
                      />
                    ))}
                </div>
              </div>
            ))}

            <div className="product-info-price">
              PRICE:{" "}
              {priceLoading ? (
                <>{currency} ...</>
              ) : (
                <>
                  {currency} {price}
                </>
              )}
              <div className="product-info-price-total"></div>
            </div>
            <div className="product-info-checkout">
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
            <div className="product-info-description" dangerouslySetInnerHTML={sanitizedDescription()} />
          </div>
        </div>
      </div>
    </>
  );
};
