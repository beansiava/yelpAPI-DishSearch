import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const BusinessDetail = ( { business } ) => {
    return ( 
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: business.image_url }} /> 
            <Text style={styles.nameStyle}>{business.name}</Text>
            <Text>{business.rating} Stars, {business.review_count} Reviews </Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },  
     imageStyle: {
         height: 150, 
         width: 250,
         padding: 10, 
         marginRight: 2,
         marginBottom: 5,
         borderRadius: 8, 
         borderWidth: 1,
         borderColor: 'black',
     },
     nameStyle: {
         fontWeight: 'bold',
         fontSize: 14, //Default in react native is 14
     }
});
 
export default BusinessDetail;