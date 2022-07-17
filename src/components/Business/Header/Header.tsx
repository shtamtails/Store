import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { clickOutsideHandler } from "utils/handleClickOutside";
import { changeCurrency, changeOverlay, IStoreSettingsReducer } from "store/reducers/storeSettings";
import CartMenu from "components/Business/Header/Menus/Cart/CartMenu";
import ActionIcon from "components/UI/ActionIcon/ActionIcon";
import Menu from "components/UI/Menu/Menu";
import CurrencyMenu from "components/Business/Header/Menus/CurrencyMenu";
import Indicator from "components/UI/Indicator/Indicator";
import Cart from "components/Icons/Cart";
import ArrowUp from "components/Icons/ArrowUp";
import ArrowDown from "components/Icons/ArrowDown";
import { ReactComponent as Logo } from "../../Icons/Logo.svg";

interface IHeaderProps {
  currencyDialog?: boolean;
  currency: IStoreSettingsReducer;
  changeCurrency: Function;
  changeOverlay: Function;
  contentOverlay: boolean;
}

interface IHeaderState {
  currencyModal: boolean;
  cartModal: boolean;
}

class Header extends Component<IHeaderProps, IHeaderState> {
  private currencyIconRef: React.RefObject<HTMLDivElement>;
  private currencyMenuRef: React.RefObject<HTMLDivElement>;
  private cartIconRef: React.RefObject<HTMLDivElement>;
  private cartMenuRef: React.RefObject<HTMLDivElement>;

  constructor(props: IHeaderProps) {
    super(props);
    this.currencyIconRef = React.createRef();
    this.currencyMenuRef = React.createRef();
    this.cartIconRef = React.createRef();
    this.cartMenuRef = React.createRef();

    this.state = {
      currencyModal: false,
      cartModal: false,
    };
  }

  handleCurrencyIconClick() {
    this.setState({
      currencyModal: !this.state.currencyModal,
    });
  }

  handleCartIconClick() {
    this.setState({
      cartModal: !this.state.cartModal,
    });
    this.props.changeOverlay(!this.props.contentOverlay);
  }

  componentDidMount() {
    clickOutsideHandler(this.currencyMenuRef, () => {
      this.setState({
        currencyModal: false,
      });
    });
    clickOutsideHandler(this.cartMenuRef, () => {
      this.props.changeOverlay(false);
      this.setState({
        cartModal: false,
      });
    });
  }

  render() {
    const handleCurrencyChange = (currency: string) => {
      this.props.changeCurrency(currency);
      this.setState({
        currencyModal: false,
      });
    };

    const handleCartClose = () => {
      this.props.changeOverlay(false);
      this.setState({
        cartModal: false,
      });
    };

    return (
      <>
        <div className="container">
          <header>
            <div className="header-navigation">
              <NavLink to="/women" className={({ isActive }) => (isActive ? "active" : "")}>
                Women
              </NavLink>
              <NavLink to="/men" className={({ isActive }) => (isActive ? "active" : "")}>
                Men
              </NavLink>
              <NavLink to="/kids" className={({ isActive }) => (isActive ? "active" : "")}>
                Kids
              </NavLink>
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
                  innerRef={this.currencyIconRef}
                  onClick={() => {
                    this.handleCurrencyIconClick();
                  }}
                >
                  <>
                    {this.props.currency}
                    <div className="currency-arrow">{this.state.currencyModal ? <ArrowUp /> : <ArrowDown />}</div>
                  </>
                </ActionIcon>
              </div>
              <div className="actions-cart">
                <ActionIcon
                  innerRef={this.cartIconRef}
                  onClick={() => {
                    this.handleCartIconClick();
                  }}
                >
                  <>
                    <Cart />
                    <Indicator>3</Indicator>
                  </>
                </ActionIcon>
              </div>
            </div>
          </header>
          <Menu
            parentRef={this.currencyIconRef}
            innerRef={this.currencyMenuRef}
            visible={this.state.currencyModal}
            offsetLeft={25}
          >
            <CurrencyMenu handleCurrencyChange={handleCurrencyChange} />
          </Menu>
          <Menu
            parentRef={this.cartIconRef}
            innerRef={this.cartMenuRef}
            visible={this.state.cartModal}
            offsetLeft={300}
          >
            <CartMenu
              onClose={() => {
                handleCartClose();
              }}
            />
          </Menu>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currency: state.store.currency,
  contentOverlay: state.store.contentOverlay,
});

const mapDispatchToProps = { changeCurrency, changeOverlay };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
