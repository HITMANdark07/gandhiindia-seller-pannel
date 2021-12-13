import { isAuthenticated } from "../auth";
import {API} from "../config";


export const getCategories = () => {
    return fetch(`${API}/category-list`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const create = (data) => {
      return fetch(`${API}/seller/product/add/${isAuthenticated().seller._id}`,{
          method:"POST",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json",
              Authorization: `Bearer ${isAuthenticated().token}`
          },
          body:JSON.stringify(data)
      }).then(response => {
          return response.json()
      }).catch(err => {
            console.log(err);
      })
  }
  
  export const getProducts = () => {
      return fetch(`${API}/seller/product-list/${isAuthenticated().seller._id}`,{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json",
              Authorization: `Bearer ${isAuthenticated().token}`
          },
      }).then(response => {
          return response.json();
      }).catch(err => {
          console.log(err);
      })
  }

  export const getProductById = (id) => {
      return fetch(`${API}/product/details/${id}`,{
          method:'GET',
          headers:{
              Accept:'application/json',
              "Content-Type":"application/json"
          }
      }).then(response => {
          return response.json()
      }).catch(err => {
          console.log(err);
      })
  }
  export const getSubCategorylist = () => {
    return fetch(`${API}/sub-category-list`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  export const uploadImages = (data) => {
    return fetch(`${API}/image/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body:data,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  export const getSubCategoriesbyCategory = (data) => {
      return fetch(`${API}/sub-category-by/category`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
   export const getSpecificationBySubCategory = (id) => {
    return fetch(`${API}/specification/by-subcategory/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
   }
    
   export const updateProduct = (id,data) => {
      return fetch(`${API}/seller/product/update/${id}/${isAuthenticated().seller._id}`,{
          method:'PUT',
          headers:{
              Accept:'application/json',
              "Content-Type":"application/json",
              Authorization:`Bearer ${isAuthenticated().token}`
          },
          body:JSON.stringify(data),
      }).then(response => {
          return response.json();
      }).catch(err => {
          console.log(err);
      })
   }
  