import React from "react";
import {
    Home,
    Header,
    About,
    Courses,
    NotFound,
    ManageCourse,
} from "./components";
import { Route, Switch, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => (
    <div className="container-fluid">
        <ToastContainer autoClose={3000} hideProgressBar />
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/about" component={About} />
            <Route path="/course/:slug" component={ManageCourse} />
            <Route path="/course" component={ManageCourse} />
            <Redirect from="/about-page" to="about" />
            <Route component={NotFound} />
        </Switch>
    </div>
);

export default App;
