import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export interface SettingItemViewProps {
  title: string;
  onPress?: () => void;
}
export interface SettingItemViewState {}

export default class SettingItemView extends React.PureComponent<
  SettingItemViewProps,
  SettingItemViewState
> {
  constructor(props: SettingItemViewProps) {
    super(props);
  }

  public render() {
    const {onPress, title} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            if (onPress) {
              onPress();
            }
          }}>
          <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    paddingHorizontal:15,
    alignItems:'center'
  },
  title:{
      fontSize:17,
      color:'#000000'
  }
});
