import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return ( 
        <View style = {styles.background}>
            <FontAwesome name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.textInput}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0FFFF',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 10,

        flexDirection: "row",
    },
    textInput: {
        marginLeft: 10,
        // borderColor: 'black',
        // borderWidth: 1,
        fontSize: 20,
        flex: 1, 
        
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    }
});
 
export default SearchBar;