import React, { ReactPropTypes } from "react";
import "./scss/App.scss";
import Header from "./components/Business/Header";
import Button from "./components/UI/Button/Button";
import { Route, Routes } from "react-router-dom";

class App extends React.Component<any, any> {
  render() {
    return (
      <>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<></>} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
