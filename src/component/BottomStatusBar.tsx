import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  NavigationStackScreenProps,
  NavigationStackOptions,
} from 'react-navigation-stack';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import images from '../resources/images';

export interface BottomStatusBarProps {
  onItemPress?: (index: number) => void;
}
export interface BottomStatusBarState {}

const ICONS = [
  images.icComment,
  images.icPraise,
  images.icStar,
  images.icShare,
];

/**
 * 文章底部
 */
export default class BottomStatusBar extends React.PureComponent<
  BottomStatusBarProps,
  BottomStatusBarState
> {
  constructor(props: BottomStatusBarProps) {
    super(props);
  }

  private onPress = (index: number) => {
    const {onItemPress} = this.props;
    if (onItemPress) {
      onItemPress(index);
    }
  };

  public render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder={'输入内容~'} />
        <View style={styles.iconContainer}>
          {ICONS.map((icon, index) => {
            return (
              <Button
                onPress={() => {
                  this.onPress(index);
                }}
                containerStyle={styles.iconContainer}
                buttonStyle={{backgroundColor: '#0000'}}
                icon={<Image source={icon} style={styles.icon} />}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    left: 0,
    paddingHorizontal: 15,
    paddingVertical: 6,
    right: 0,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F2F3F5',
    backgroundColor: '#FFFFFF',
  },
  input: {
    width: 130,
    paddingLeft: 10,
    borderRadius: 20,
    textAlignVertical: 'center',
    borderColor: '#F7F8FA',
    backgroundColor: '#F7F8FA',
    borderWidth: 1,
  },

  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  btnIconContainer: {
    color: '#0000',
  },
  btnTitleStyle: {
    color: '#0000',
  },
  btnStyle: {
    color: '#0000',
  },
  icon: {
    resizeMode: 'center',
    width: 24,
    height: 24,
  },
});
