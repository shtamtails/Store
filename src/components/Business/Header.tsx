import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { increment, decrement } from "../../store/reducers/counter";
import ActionIcon from "../UI/ActionIcon/ActionIcon";
import { ReactComponent as ArrowDown } from "../Icons/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../Icons/ArrowUp.svg";
import { ReactComponent as Logo } from "../Icons/Logo.svg";
import { ReactComponent as Cart } from "../Icons/Cart.svg";
import Menu from "../UI/Menu/Menu";
import CurrencyMenu from "../UI/Menu/Menus/CurrencyMenu";

interface IHeaderProps {
  currencyDialog?: boolean;
}

interface IHeaderState {
  currencyDialog: boolean;
}

export class Header extends Component<IHeaderProps, IHeaderState> {
  private currencyMenuRef: React.RefObject<HTMLDivElement>;

  constructor(props: IHeaderProps) {
    super(props);
    this.currencyMenuRef = React.createRef();
    this.state = {
      currencyDialog: false,
    };
  }

  handleCurrencyClick() {
    this.setState({
      currencyDialog: !this.state.currencyDialog,
    });
  }

  render() {
    return (
      <>
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
                innerRef={this.currencyMenuRef}
                onClick={() => {
                  this.handleCurrencyClick();
                }}
              >
                <>
                  $<div className="currency-arrow">{this.state.currencyDialog ? <ArrowUp /> : <ArrowDown />}</div>
                </>
              </ActionIcon>
            </div>
            <div className="actions-cart">
              <Link to="/cart">
                <ActionIcon>
                  <Cart />
                </ActionIcon>
              </Link>
            </div>
          </div>
        </header>
        <Menu parentRef={this.currencyMenuRef} visible={this.state.currencyDialog}>
          <CurrencyMenu />
        </Menu>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  count: state.counter.count,
});

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
