import React from "react";
import { Home, About, Header, Courses } from "./components";

const App = () => {
    const getPage = () => {
        const route = window.location.pathname;
        if (route === "/about") return <About />;
        if (route === "/course") return <Courses />;
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
