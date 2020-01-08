import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';

const RootStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    initialRouteName: 'HomeScreen',
  },
);
export const AppContainer = createAppContainer(RootStack);
