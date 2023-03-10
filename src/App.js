import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <br />
        <br />

        <Router>
          <Fragment>
            <Header></Header>

            <Routes>
              <Route exact path="/home" element={<Home></Home>}></Route>
              <Route exact path="/" element={<Home></Home>}></Route>

              <Route exact path="/" element={<PrivateRoute></PrivateRoute>}>
                <Route exact path="/shipping" element={<Shipping></Shipping>} />
              </Route>
              <Route exact path="/login" element={<Login></Login>}></Route>
              <Route
                exact
                path="/register"
                element={<Register></Register>}
              ></Route>
            </Routes>
          </Fragment>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
