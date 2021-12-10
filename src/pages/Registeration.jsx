import React, { useState }  from "react";
import classes from "../assets/css/registration.module.css";

const Registeration = () => {

  const [data, setData] = useState({
    name: "",
    email: ""
  });

  const changeHandler = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
      event.preventDefault();
      console.log(data);
  }

  const { name, email } = data;

  return (
    <div className={classes.container}>
     <h3 className={classes.heading}> REGISTRATION-PAGE </h3>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="name">
            <b>Name</b>
          </label>
          <input
            placeholder="Enter your name"
            className={classes.input}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={changeHandler}
          ></input>
        </div>

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
          <label className={classes.label} htmlFor="photo">
            <b>Upload Photo</b>
          </label>
          <input className={classes.choose} type="file" ></input>
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="pan">
            <b>Upload PAN</b>
          </label>
          <input className={classes.choose} type="file" id="pan"></input>
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="pan">
            <b>Upload Aadhar</b>
          </label>
          <input className={classes.choose} type="file" id="pan"></input>
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="pan">
            <b>Upload Signature</b>
          </label>
          <input className={classes.choose} type="file" id="pan"></input>
        </div>

        <button className={classes.button}>Register</button>
      </form>
      </div>
  );
};

export default Registeration;
