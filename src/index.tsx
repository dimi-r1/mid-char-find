import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CharFinder from "./CharFinder/CharFinder";
import About from "./About/About";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<CharFinder />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
