import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  </>
);
