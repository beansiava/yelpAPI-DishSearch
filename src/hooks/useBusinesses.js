import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [businesses, setBusinesses] = useState([]); //results will have a large array of yelp objects
    const [errMessage, setErrorMessage] = useState('');

    

    const searchApi = async (searchTerm) => { 
        console.log('searchAPI hello');
        try{
        const response = await yelp.get('/search', 
            {
                params: {
                    limit: 50, //?limit=50
                    term: searchTerm, //make no mistake, YELP API uses TERM
                    location: 'san jose'
                    //location
                    //term
                }
            }); //gets concatinated on the back of our baseURL 
            setBusinesses(response.data.businesses);
            setErrorMessage("");
        } catch (e) {
            console.log(e)
            setErrorMessage("something went wrong");
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [searchApi, businesses, errMessage];
}