import React, { ReactPropTypes } from "react";
import "./scss/style.scss";
import Header from "./components/Business/Header/Header";
import Button from "./components/UI/Button/Button";
import { Route, Routes } from "react-router-dom";
import Cart from "pages/Cart/Cart";
import Overlay from "components/UI/Overlay/Overlay";
import { connect } from "react-redux";
import Content from "pages/Content/Content";
import Item from "pages/Item/Item";

class App extends React.Component<any, any> {
  render() {
    return (
      <>
        <Header />
        <div className="overlay-container">
          <Overlay visible={this.props.contentOverlay} />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<Item />} />
          </Routes>
          <footer></footer>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  contentOverlay: state.store.contentOverlay,
});

export default connect(mapStateToProps)(App);
