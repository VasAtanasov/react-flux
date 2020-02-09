import React from "react";
import { Home, About, Header } from "./components";

const App = () => {
    const getPage = () => {
        const route = window.location.pathname;
        if (route === "/about") return <About />;
        return <Home />;
    };

    return (
        <div className="container-fluid">
            <Header />
            {getPage()}
        </div>
    );
};

export default App;
