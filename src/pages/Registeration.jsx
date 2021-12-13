import React, { useState }  from "react";
import { Redirect } from "react-router-dom";
import { registerSeller } from "../api/initiator";
import classes from "../assets/css/registration.module.css";
import { isAuthenticated } from "../auth";
import Header from "../components/Header";
import makeToast from "../Toaster";

const Registeration = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    pan:null,
    photo:null,
    id_proof:null,
    signature:null,
    success:false,
    loading:false
  });
  const {name, email, pan, photo, id_proof, signature,success, loading, phone } = data;

  const changeHandler = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const  value = (name === 'photo' || name==='signature' || name==='pan' || name==='id_proof') ? event.target.files[0] : event.target.value;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (event) => {
      event.preventDefault();
      setData({...data, loading:true});
      const formData = new FormData();
      formData.set('name',name);
      formData.set('signature',signature);
      formData.set('email',email);
      formData.set('photo',photo);
      formData.set('phone',phone);
      formData.set('pan',pan);
      formData.set('id_proof',id_proof);
      registerSeller(formData).then((response => {
        if(response.message){
          makeToast("success","Registraton Successfull we will send you email once we verify your documents");
          setData({...data,loading:false,name:"",email:"",phone:"", signature:null,photo:null,pan:null,id_proof:null, success:true});
        }else{
          makeToast("error",response.error);
          setData({...data,loading:false});
        }
      })).catch((err) => {
        console.log(err);
        setData({...data,loading:false});
      })
  }
  const successMsg = () => {
    if(success){
      return (
        <div style={{textAlign:"center", fontSize:'16px',color:'red' }}>
          we will send you an email about your account activation once its verified by our end.
          <div>THANK YOUR FOR REGISTERATION</div>
        </div>
      )
    }
  }
  const redirectIfLogged = () => {
    if(isAuthenticated()){
        return (<Redirect to="/all-products" />)
    }
}


  return (
    <Header>
      <div className={classes.container}>
     <h3 className={classes.heading}> REGISTRATION-PAGE </h3>
     {redirectIfLogged()}
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
          <label className={classes.label} htmlFor="phone">
            <b>Mobile No.</b>
          </label>
          <input
            placeholder="Mobile No."
            className={classes.input}
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={changeHandler}
          ></input>
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="photo">
            <b>Upload Photo</b>
          </label>
          <input className={classes.choose} name="photo" onChange={changeHandler} type="file" ></input>
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="pan">
            <b>Upload PAN</b>
          </label>
          <input className={classes.choose} name="pan"  onChange={changeHandler} type="file" id="pan"></input>
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="id_proof">
            <b>Upload Id-proof (Govt. Affilated)</b>
          </label>
          <input className={classes.choose} name="id_proof" onChange={changeHandler} type="file" id="id_proof"></input>
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="signature">
            <b>Upload Signature</b>
          </label>
          <input className={classes.choose} name="signature" onChange={changeHandler} type="file" id="signature"></input>
        </div>
        {successMsg()}

        <button disabled={loading} className={classes.button}>
          {loading ? "Registering...." : "Register"}
        </button>
      </form>
      </div>
    </Header>
  );
};

export default Registeration;
