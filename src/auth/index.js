import { API } from "../config";


// export const signup = (user) => {
//     return fetch(`${API}/auth/register`,{
//         method:"POST",
//         headers:{
//             Accept:'application/json',
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//     })
//         .then(response => {
//             return response.json()
//         })
//         .catch(err => {
//             console.log(err)
//         });
//     };

export const signin = (user) => {
    return fetch(`${API}/seller/signin`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        });
    };

export const authenticate = (data, next) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt-seller', JSON.stringify(data));
        next();
    }
};

export const signout = (next) => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt-seller');
        next();
    }
};

export const isAuthenticated = () => {
    if(typeof window == 'undefined'){
        return false
    }
    if(localStorage.getItem('jwt-seller')){
        return JSON.parse(localStorage.getItem('jwt-seller'));
    }else{
        return false;
    }
};