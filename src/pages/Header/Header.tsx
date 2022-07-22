import { ReactComponent as Logo } from "components/UI/Icons/Logo.svg";
import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrencyMenu } from "../../components/Business/Menus/Currency/CurrencyMenu";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setCurrency, setOverlay } from "store/slices/storeSettings";
import { ArrowDown } from "components/UI/Icons/ArrowDown";
import { ArrowUp } from "components/UI/Icons/ArrowUp";
import { Cart } from "components/UI/Icons/Cart";
import { ActionIcon } from "components/UI/ActionIcon/ActionIcon";
import { Indicator } from "components/UI/Indicator/Indicator";
import { Menu } from "components/UI/Menu/Menu";
import { useQuery } from "@apollo/client";
import { FETCH_CATEGORIES } from "apollo/queries/storeAPI";
import { uid } from "uid";
import { useClickOutside } from "hooks/useClickOutside";
import { MiniCartMenu } from "components/Business/Menus/MiniCart/MiniCartMenu";

export const Header: React.FC = () => {
  const { loading, error, data } = useQuery(FETCH_CATEGORIES);

  const { cart } = useAppSelector((store) => store.cart);

  const { contentOverlay, currency } = useAppSelector((store) => store.storeParams);
  const dispatch = useAppDispatch();

  const [currencyModal, setCurrencyModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  const currencyIconRef = useRef(null);
  const currencyMenuRef = useRef(null);
  const cartIconRef = useRef(null);
  const cartMenuRef = useRef(null);

  const handleCurrencyIconClick = () => {
    setCurrencyModal(!currencyModal);
  };

  const handleCartIconClick = () => {
    setCartModal(!cartModal);
    dispatch(setOverlay(!contentOverlay));
  };

  const handleCurrencyChange = (currency: string) => {
    dispatch(setCurrency(currency));
    setCurrencyModal(false);
  };

  const handleCartClose = () => {
    dispatch(setOverlay(false));
    setCartModal(false);
  };
  useClickOutside(currencyMenuRef, () => {
    setCurrencyModal(false);
  });
  useClickOutside(cartMenuRef, () => {
    dispatch(setOverlay(false));
    setCartModal(false);
  });

  return (
    <>
      <div className="container">
        <header>
          <div className="header-navigation">
            {data &&
              data.categories.map((category: any) => (
                <NavLink key={uid()} to={`/${category.name}`} className={({ isActive }) => (isActive ? "active" : "")}>
                  {category.name.toUpperCase()}
                </NavLink>
              ))}
          </div>
          <div className="header-logo">
            <div className="logo">
              <Link to="/">
                <ActionIcon>
                  <Logo />
                </ActionIcon>
              </Link>
            </div>
          </div>
          <div className="header-actions">
            <div className="actions-currency">
              <ActionIcon
                innerRef={currencyIconRef}
                onClick={() => {
                  handleCurrencyIconClick();
                }}
              >
                <>
                  {currency}
                  <div className="currency-arrow">{currencyModal ? <ArrowUp /> : <ArrowDown />}</div>
                </>
              </ActionIcon>
            </div>
            <div className="actions-cart">
              <ActionIcon
                innerRef={cartIconRef}
                onClick={() => {
                  handleCartIconClick();
                }}
              >
                <>
                  <Cart />
                  {cart.length > 0 && <Indicator>{cart.length}</Indicator>}
                </>
              </ActionIcon>
            </div>
          </div>
        </header>
        <Menu parentRef={currencyIconRef} innerRef={currencyMenuRef} visible={currencyModal} offsetLeft={25}>
          <CurrencyMenu handleCurrencyChange={handleCurrencyChange} />
        </Menu>
        <Menu parentRef={cartIconRef} innerRef={cartMenuRef} visible={cartModal} offsetLeft={300}>
          <MiniCartMenu
            onClose={() => {
              handleCartClose();
            }}
          />
        </Menu>
      </div>
    </>
  );
};
