import React from 'react'
import { isAuthenticated } from '../auth';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';
const LandingPage =(props) => {

    const redirectIfLogged = () => {
        if(isAuthenticated()){
            return (<Redirect to="/all-products" />)
        }
    }
    return (
        <Header>
            <div style={{textAlign:"center", color:"#ff631c"}}>
            <h1>WELCOME TO GANDHI INDIA SELLER-PANNEL</h1>
            {redirectIfLogged()}
            <h2>WANT TO BECOME SELLER-PARTNER OF GANDHI-INDIA ?</h2>
            <h3 style={{
                fontSize:"25px",
                color:"white",
                backgroundColor:"#ff631c",
                width:'20%',
                marginLeft:"50%",
                transform:'translateX(-50%)',
                textAlign:"center",
                padding:"12px",
                borderRadius:"12px",
                cursor:"pointer"
            }}>REGISTER NOW</h3>
            </div>
        </Header>
    )
}

export default LandingPage;
