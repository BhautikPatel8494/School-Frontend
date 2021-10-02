import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Home from "./component/Home/Home";
import Mcq from "./component/Mcq/Mcq";
import PrivateRoute from "./component/PrivateRoute";
import History from "./component/History/History";
import About from "./component/About/About";
import StudentHistory from "./component/StudentHistory/StudentHistory";
import Addmission from "./component/Addmission/Addmission";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import AddmissionInfo from "./component/Addmission/AddmissionInfo";
import AddExam from "./component/AddExam/AddExam";
import UpdateGiveExam from "./component/GiveExam/UpdateGiveExam";

function App() {
  return (
    <>
      <Router>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <PrivateRoute component={Home} exact path="/" />
        <PrivateRoute component={About} exact path="/about" />
        <PrivateRoute component={Addmission} exact path="/addmission" />
        <PrivateRoute component={AddmissionInfo} exact path="/addmissionInfo" />
        <PrivateRoute component={Mcq} exact path="/mcq" />
        <PrivateRoute component={AddExam} exact path="/addexam" />
        <PrivateRoute component={UpdateGiveExam} exact path="/exam" />
        <PrivateRoute component={History} exact path="/history" />
        <PrivateRoute component={StudentHistory} exact path="/studenthistory" />
      </Router>
    </>
  );
}

export default App;
