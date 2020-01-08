import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NavigationStackScreenProps, NavigationStackOptions } from 'react-navigation-stack'

export interface HomeScreenProps {
}
export interface HomeScreenState {
}

export default class HomeScreen extends React.PureComponent<HomeScreenProps, HomeScreenState> {
  public static navigationOptions = (props: NavigationStackScreenProps): NavigationStackOptions => {
      return {
          header: null
      }
  }
  constructor(props: HomeScreenProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
         <Text>HomeScreen Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})