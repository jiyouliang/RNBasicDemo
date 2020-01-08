import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { AppContainer } from './src/NavigationStacks';

export interface AppProps {}
export interface AppState {}

export default class App extends React.PureComponent<AppProps, AppState> {
  public static navigationOptions = (
    props: NavigationStackScreenProps,
  ): NavigationStackOptions => {
    return {
      header: null,
    };
  };
  constructor(props: AppProps) {
    super(props);
  }

  public render() {
    console.disableYellowBox = true
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
