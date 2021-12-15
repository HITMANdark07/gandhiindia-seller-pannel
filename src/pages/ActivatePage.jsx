import React, { useState } from "react";
import jwt from 'jsonwebtoken';
import classes from '../assets/css/ActivatePage.module.css'
import makeToast from "../Toaster";
import { activateAccount } from "../api/initiator";
import { authenticate } from "../auth";
import { withRouter } from "react-router-dom";

const ActivatePage = ({history,match:{params:{token}}}) => {
    const [data, setData] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        verified:1,
        registrationId:""
    })
    const [confirmPass, setConfirmPass] = useState('');
    const {name, password, phone} = data;
    const handleChange = (event) => {
        event.preventDefault();
        var value = event.target.value;

        switch(event.target.name){
            case 'pwd':
                setData({...data,password:value})
                break;
            case 'confirm_pwd':
                setConfirmPass(value);
                break;
            default:
                console.log(value);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(password===confirmPass){
            activateAccount(data).then((response) => {
                console.log(response);
                if(response.token){
                    makeToast("success", "Welocme to Gandhi-India, "+response.seller.name);
                    authenticate(response,() => {
                      history.push("/add-products");
                    })
                }else{
                    makeToast("error", response.error);
                }
            }).catch(err => {
                console.log(err);
            })
        }else{
            makeToast("error","Please Confirm Your Password");
        }
    }
    React.useEffect(() => {
        const {name, email, phone ,id} = jwt.decode(token);
        if(token){
            setData({
                name:name,
                email:email,
                phone:phone,
                registrationId:id,
                verified:1
            })
        }
    },[token]);

    return (
        <div className={classes.main}>
           <div className={classes.App} >
           <form className={classes.Activates} onSubmit={handleSubmit}>
           <h1>Hi {name}, Activate Account</h1>
           <div className={classes.label}>
           <label htmlFor='phone'><b>Phone Number</b></label>
           <input type='tel' className={classes.input} id='phone' name='phone' value={phone} onChange={handleChange} placeholder="Phone Number" disabled />
           </div> 
           <div className={classes.label}>
           <label htmlFor='pwd'><b>Password</b></label>
           <input type='password' id='pwd' className={classes.input} name='pwd'value={password} onChange={handleChange} placeholder="Password"/>
           </div>
           <div className={classes.label}>
           <label htmlFor='confirm'><b>Confirm password</b></label>
           <input type='password' id='confirm' className={classes.input} name='confirm_pwd' value={confirmPass} onChange={handleChange} placeholder="Confirm Password"/>
           </div>
           <button className={classes.button}>Activate</button>
           </form>
        </div>
        </div>
    );
};

export default withRouter(ActivatePage);



