import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/apollo";
import { App } from "App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);
