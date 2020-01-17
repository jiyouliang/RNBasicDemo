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
import Modal from 'react-native-modal';

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
      <Modal
        animationIn={{ from: { opacity: 1 }, to: { opacity: 1 } }}
        backdropColor={'#0000'}
        style={[styles.container]}
        isVisible={true}
        >
        <ActivityIndicator
          size={'large'}
          color={'#FEDD37'}
          style={{backgroundColor: 'grey', padding: 4, borderRadius: 8}}
        />
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
