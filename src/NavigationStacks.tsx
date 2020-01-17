import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ArticleDetailScreen from './screens/ArticleDetailScreen';
import FlatListChangeDateScreen from './screens/FlatListChangeDateScreen';
import UmengDemoScreen from './screens/UmengDemoScreen';

const RootStack = createStackNavigator(
  {
    HomeScreen,
    ArticleDetailScreen,
    FlatListChangeDateScreen,
    UmengDemoScreen
  },
  {
    initialRouteName: 'HomeScreen',
   
  },
);
export const AppContainer = createAppContainer(RootStack);
