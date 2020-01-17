import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  NavigationStackScreenProps,
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack';
import SettingItemView from '../component/SettingItemView';

export interface HomeScreenProps {
  navigation: NavigationStackProp;
}
export interface HomeScreenState {}

const data = ['ArticleDetailScreen', 'UmengDemoScreen'];

export default class HomeScreen extends React.PureComponent<
  HomeScreenProps,
  HomeScreenState
> {
  public static navigationOptions = (
    props: NavigationStackScreenProps,
  ): NavigationStackOptions => {
    return {
      headerTitle: 'ReactNative',
    };
  };

  private navigation: NavigationStackProp;

  constructor(props: HomeScreenProps) {
    super(props);
    const {navigation} = this.props;
    this.navigation = navigation;
  }

  private renderItem = ({item}) => {
    return (
      <SettingItemView
        title={item}
        onPress={() => {
          this.navigation.navigate(item);
        }}
      />
    );
  };

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => this.renderItem({item})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
