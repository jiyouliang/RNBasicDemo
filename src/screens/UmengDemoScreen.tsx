import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NavigationStackScreenProps, NavigationStackOptions } from 'react-navigation-stack'
import SettingItemView from '../component/SettingItemView'
import AnalyticsUtil from '../native/AnalyticsUtil'

export interface UmengDemoScreenProps {
}
export interface UmengDemoScreenState {
}

/**
 * 友盟统计相关
 */
export default class UmengDemoScreen extends React.PureComponent<UmengDemoScreenProps, UmengDemoScreenState> {
  public static navigationOptions = (props: NavigationStackScreenProps): NavigationStackOptions => {
      return {
          header: null
      }
  }
  constructor(props: UmengDemoScreenProps) {
    super(props);
  }

  public componentDidMount = () => {
      this.onPageStart()
  }

  public componentWillUnmount = () => {
      this.onPageEnd()
  }

  private onPageStart = () => {
    AnalyticsUtil.onPageStart("测试页面");
}

private onPageEnd = () => {
    AnalyticsUtil.onPageEnd("测试页面");

  }

  private onLoginEvent = () => {
    AnalyticsUtil.onEvent('loginEvent');
  }

  public render() {
    return (
      <View style={styles.container}>
         <SettingItemView title={'自定义事件'} onPress={this.onLoginEvent} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
    }
})