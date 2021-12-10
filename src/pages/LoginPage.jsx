import React, { useState } from "react";
import classes from "../assets/css/loginPage.module.css";

const LoginPage = () => {
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
      console.log(data);
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.heading}> LOGIN-PAGE </h3>
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
      </form>
    </div>
  );
};

export default LoginPage;
