import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// custom colors
const colors = {
  brand: {
    900: "#ff8547",
    700: "#ff5300",
    500: "#cc4400",
  },
  floralWhite: {
    500: "#FFFCF2",
  },
  silver: {
    500: "#CCC5b9",
  },
  blackOlive: {
    500: "#403D39",
  },
  eerieBlack: {
    500: "#252422",
  },
};
const theme = extendTheme({ colors });

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
