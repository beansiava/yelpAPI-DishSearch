import axios from 'axios';
    //fetch() requires a lot of wrapper code to work 100% but is out of the box
    //axios() is a seperate libarary, so it increases app size.  EASY to use

//Enables use of YELP API without needing to reset the baseURL or the Auth
export default axios.create(
  { 
      baseURL: 'https://api.yelp.com/v3/businesses',
    //   particular business https://api.yelp.com/v3/businesses/{id}
    // /https://api.yelp.com/v3/businesses/search
    headers: {
        Authorization: 
            'Bearer apHCg3_x-6_NzY1NOQSJyQURtBwc40I4mlAZxgkdQoVIL_8ncbexIlFL1Jhoi74ShiaiJE413-yXOzDZKyJfsJsxXWK-xKdqSXp67pL0zREvCfFLiZVfbcWcFc0iX3Yx'
    }
   }
);

