import React, { useState } from "react";
import classes from '../assets/css/ActivatePage.module.css'

const ActivatePage = () => {
    const [phone,setPhone]=useState('');
    const [password,setPassword] =useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        switch(event.target.name){
            case 'phone':
                setPhone(event.target.value);
                break;
            case 'pwd':
                setPassword(event.target.value);
                break;
            case 'confirm_pwd':
                setConfirmPass(event.target.value);
                break;
            default:
                console.log(event.target.value);
        }
    }
    const handleSubmit = () => {
        
    }

    return (
        <div className={classes.main}>
           <div className={classes.App} >
           <form className={classes.Activates} onSubmit={handleSubmit}>
           <h1>Hi Name, Activate Account</h1>
           <div className={classes.label}>
           <label htmlFor='phone'><b>Phone Number</b></label>
           <input type='tel' className={classes.input} id='phone' name='phone' value={phone} onChange={handleChange} placeholder="Phone Number"/>
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

export default ActivatePage;



