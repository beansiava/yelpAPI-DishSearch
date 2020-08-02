import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, FlatList, Image } from 'react-native';

import yelp from '../api/yelp';

//PASS ID AS PARAM SO ENTIRE OBJECT DOESN'T NEED TO BE SENT
//USE YELP API AGAIN TO GET BUSINESS INFO
const BusinessShowScreen = ( {navigation} ) => {
    //For a default of a single object, use null
    const [business, setBusiness] = useState(null);

    const id = navigation.getParam('id')
    
    const getBusiness = async (id) => {
        const response = await yelp.get(`/${id}`);
        setBusiness(response.data);
    };
    //Only call the function on first render only
    //pass item inside [] to call on change
    //delete [] to run on every render  
    useEffect(() => { 
        getBusiness(id);
    }, []);

    if(!business) {
        return null;
    }

    return ( 
        <View> 
            <Text style={styles.text}>{business.name}</Text>
            <FlatList 
                data={business.photos}
                keyExtractor={(photo) => photo}
                renderItem={( {item } ) => {
                    return <Image style={styles.image} source={{ uri: item }}/>
                }}
            /> 
        </View>
     );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        margin: 4,

    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default BusinessShowScreen;