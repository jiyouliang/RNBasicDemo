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
        style={{width:'100%'}}
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
    height: 40,
    flexDirection: 'row',
    marginTop:10,
    marginHorizontal:10,
    paddingLeft:10,
    borderRadius:4,
    alignItems:'center',
    backgroundColor:'grey',
  },
  title:{
      fontSize:17,
      color:'#000000',
      width:'100%',
      textAlign:'center',
      lineHeight:40,
      
  }
});
