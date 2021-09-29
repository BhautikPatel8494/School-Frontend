import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Home from "./component/Home/Home";
import Mcq from "./component/Mcq/Mcq";
import PrivateRoute from "./component/PrivateRoute";
import GiveExam from "./component/GiveExam/GiveExam";
import ExamDone from "./component/GiveExam/ExamDone";
import History from "./component/History/History";
import About from "./component/About/About";
import StudentHistory from "./component/StudentHistory/StudentHistory";

console.log(`object`)
function App() {
  return (
    <>
      <Router>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRoute component={Home} exact path="/" />
        <PrivateRoute component={About} exact path="/about" />
        <PrivateRoute component={Mcq} exact path="/mcq" />
        <PrivateRoute component={GiveExam} exact path="/exam" />
        <PrivateRoute component={ExamDone} exact path="/examdone" />
        <PrivateRoute component={History} exact path="/history" />
        <PrivateRoute component={StudentHistory} exact path="/studenthistory" />
      </Router>
    </>
  );
}

export default App;
