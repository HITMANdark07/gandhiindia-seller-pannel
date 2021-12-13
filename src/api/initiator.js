import {API} from "../config";

export const registerSeller = (data) => {
    return fetch(`${API}/seller/kyc`,{
        method:"POST",
        headers:{
            Accept:"application/json"
        },
        body:data
    }).then(response =>{
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const activateAccount = (data) => {
    return fetch(`${API}/seller/signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    })
}