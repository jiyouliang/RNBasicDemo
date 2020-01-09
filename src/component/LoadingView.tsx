import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {
  NavigationStackScreenProps,
  NavigationStackOptions,
} from 'react-navigation-stack';

export interface LoadingViewProps {}
export interface LoadingViewState {}

export default class LoadingView extends React.PureComponent<
  LoadingViewProps,
  LoadingViewState
> {
  constructor(props: LoadingViewProps) {
    super(props);
  }

  public render() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
      <View style={[styles.container, {width, height}]}>
        <ActivityIndicator size={'large'} color={'#FED337'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
