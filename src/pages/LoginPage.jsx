import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import classes from "../assets/css/loginPage.module.css";
import Header from "../components/Header";
import { authenticate, isAuthenticated, signin } from "../auth/index";
import { withRouter } from "react-router-dom";
import makeToast from "../Toaster";

const LoginPage = ({history}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const changeHandler = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
      event.preventDefault();
      signin(data).then(response => {
        if(response.seller){
          makeToast("success", "Hi "+response.seller.name);
        authenticate(response,() => {
          history.push("/add-products");
        })
        }else{
          makeToast("error",response.err);
        }
      }).catch(err => {
        console.log(err);
      })
  }
  const redirectIfLogged = () => {
    if(isAuthenticated()){
        return (<Redirect to="/all-products" />)
    }
}
  
  return (
    <Header>
      <div className={classes.container}>
      <h3 className={classes.heading}> LOGIN-PAGE </h3>
      {redirectIfLogged()}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="email">
            <b>Email</b>
          </label>
          <input
            placeholder="Enter your email"
            className={classes.input}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={changeHandler}
          ></input>
        </div>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="password">
            <b>Password</b>
          </label>
          <input
            placeholder="Enter password"
            className={classes.input}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={changeHandler}
          ></input>
        </div>
        <button className={classes.button}>Log In</button>
        <p style={{textDecoration:'none', margin:"8px"}}>
        <Link to="/register" >
          I don't have an account! Register Now.
        </Link>
        </p>
      </form>
    </div>
    </Header>
  );
};

export default withRouter(LoginPage);
