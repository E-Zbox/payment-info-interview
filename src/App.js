import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne.js";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

const theme = {
    colors: {
        dark01: "#343434",
        dark02: "#4d545e",
        dark03: "#4d8eef28",
        dark04: "#9e9e9e",
        blue01: "#164ccf",
        blue02: "#164ccfc8",
    },
    menu: {
        color: {
            default: "#4d545e",
            hover: "#4d8eef",
        },
        font: {
            size: "1rem",
        },
    },
    image: {
        size: "55px",
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
