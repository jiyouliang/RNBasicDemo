import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ArticleDetailScreen from './screens/ArticleDetailScreen';
import FlatListChangeDateScreen from './screens/FlatListChangeDateScreen';

const RootStack = createStackNavigator(
  {
    HomeScreen,
    ArticleDetailScreen,
    FlatListChangeDateScreen
  },
  {
    initialRouteName: 'ArticleDetailScreen',
   
  },
);
export const AppContainer = createAppContainer(RootStack);
