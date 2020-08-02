import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import useBusinesses from '../hooks/useBusinesses';

import SearchBar from '../components/SearchBar'
import BusinessList from '../components/BusinessList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, businesses, errMessage] = useBusinesses();

    // console.log(props);
    // console.log(businesses);

    const filterBusinessesByPrice = (price) => {
        // price === '$' || '$$' || '$$$' || '$$$$' 
        return businesses.filter(business => {
            return business.price === price;
        })
    };

    return ( 
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            { errMessage  ? 
                <Text>{errMessage}</Text>
                : null
            }

            <ScrollView>
            <BusinessList 
                title="Cost Effective ($)"
                businesses={filterBusinessesByPrice('$')}
            />
            <BusinessList 
                title="Pricy ($$)"
                businesses={filterBusinessesByPrice('$$')}

            />
            <BusinessList 
                title="Very Expensive ($$$)"
                businesses={filterBusinessesByPrice('$$$')}

            />
            <BusinessList 
                title="Big Baller Money ($$$$)"
                businesses={filterBusinessesByPrice('$$$$')}

            />
            </ScrollView>

        </>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //HELLLOOOO: using flex: 1 to most parent view will solve a lot of issues
                //such as the ScrollView Issue on android
    },

});
 
export default SearchScreen;