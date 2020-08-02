import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import BusinessShowScreen from './src/screens/BusinessShowScreen';


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    BusinessShow: BusinessShowScreen
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      // this sets the title shown at every screen in the app
      title: 'BusinessSearch',
  }
});

export default createAppContainer(navigator);
