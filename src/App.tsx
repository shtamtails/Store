import React from "react";
import "./scss/style.scss";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from "components/Business/Header/Header";
import { Overlay } from "components/UI/Overlay/Overlay";
import { Content } from "pages/Content/Content";
import { Item } from "pages/Item/Item";
import { Cart } from "pages/Cart/Cart";

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
