import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import{ withNavigation } from 'react-navigation';

import BusinessDetail from './BusinessDetail';


const BusinessList = ( {title, businesses, navigation } ) => {
    if (!businesses.length) {
        return null;
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                data={businesses}
                keyExtractor={(business) => business.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('BusinessShow', {id: item.id})}> 
                            <BusinessDetail business={item} />
                        </TouchableOpacity>
                    )
                }}  
            /> 
            
        </View>
     );
}; 

const styles = StyleSheet.create({ 
    container: {
        marginBottom: 10,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    }
});

export default withNavigation(BusinessList);