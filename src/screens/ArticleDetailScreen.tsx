import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  NavigationStackScreenProps,
  NavigationStackOptions,
} from 'react-navigation-stack';

import AutoHeightWebView, {SizeUpdate} from 'react-native-autoheight-webview';
import LoadingView from '../component/LoadingView';
import ArticleViewModel from './viewmodel/ArticleViewModel';
import BottomStatusBar from '../component/BottomStatusBar';
import CommentListView from '../component/CommentListView';
import Comment from './viewmodel/Comment';
import FastImage from 'react-native-fast-image';

export interface ArticleDetailScreenProps {}
export interface ArticleDetailScreenState {
  loading: boolean;
  webLoadSuccess: boolean;
  data: Comment[];
  refresh: number;
}

/**
 * 新闻/文章详情页Demo
 */
export default class ArticleDetailScreen extends React.PureComponent<
  ArticleDetailScreenProps,
  ArticleDetailScreenState
> {
  public static navigationOptions = (
    props: NavigationStackScreenProps,
  ): NavigationStackOptions => {
    return {
      headerTitle: '管理程序员的第三年，给大家的一些建议',
    };
  };

  private data = {
    source: 'https://mp.weixin.qq.com/s/lt3makY_b-MJFq4yfFwAdw',
    title: '管理程序员的第三年，给大家的一些建议',
  };

  constructor(props: ArticleDetailScreenProps) {
    super(props);
    this.state = {
      loading: true,
      webLoadSuccess: false,
      data: null,
      refresh: 0,
    };
  }
  private commentViewModel = new ArticleViewModel();
  private scrollView!: ScrollView;
  private webViewHeight!: number;

  private onWebLoaded = () => {
    this.setState({loading: false, webLoadSuccess: true});
    // 滑动到底部
    this.getCommentList();
  };

  private onItemPress = (index: number) => {
    console.log(index);

    // console.log(`success=${success},commetList=${JSON.stringify(commetList)}`);
    const {webLoadSuccess} = this.state;
    if (index == 0 && webLoadSuccess) {
      // 滑动到底部 && 获取评论列表
      if (this.scrollView) {
        const height = Dimensions.get('window').height;
        this.scrollView.scrollTo({y: this.webViewHeight, animated: true});
      }
    }
  };

  private onWebSizeChange = (size: SizeUpdate) => {
    this.webViewHeight = size.height;
  };

  private onMomentumScrollEnd = () => {
    console.log('onMomentumScrollEnd');
  };

  private onPraisePress = async (index: number, comment: Comment) => {
    this.setState({loading: true});
    console.log('onPraisePress:index=' + index);
    const {success} = await this.commentViewModel.senPraise();
    console.log('onPraisePress:comment=' + JSON.stringify(comment));
    console.log('onPraisePress:success:' + success);
    const {data, refresh} = this.state;
    if (success) {
      comment.praise += 1;
      this.setState({data: data, loading: false, refresh: refresh + 1});
    } else {
      this.setState({loading: false});
    }
    return 0;
  };

  private getCommentList = async () => {
    const {success, commetList} = await this.commentViewModel.getCommentList();
    this.setState({loading: true});
    console.log(
      'getCommentList:success=' +
        success +
        ',commentList=' +
        JSON.stringify(commetList),
    );
    if (success) {
      this.setState({data: commetList});
    }
    this.setState({loading: false});
    return success;
  };

  public render() {
    const {source} = this.data;
    const {loading, webLoadSuccess} = this.state;
    const {data, refresh} = this.state;
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>render:loading='+loading);
    if (data) {
      data.map(item => {
        console.log('id=' + item.id + ',praise=' + item.praise);
      });
    }
    return (
      <View style={styles.container}>
        
        <ScrollView
          style={styles.scrollView}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          showsVerticalScrollIndicator={false}
          ref={scrollView => {
            this.scrollView = scrollView;
          }}>
          
          <AutoHeightWebView
            onSizeUpdated={size => {
              this.onWebSizeChange(size);
            }}
            style={styles.webView}
            source={{uri: source}}
            onLoad={this.onWebLoaded}
          />
          <CommentListView
            data={data}
            refresh={refresh}
            onPraisePress={this.onPraisePress}
          />
        </ScrollView>
        {webLoadSuccess && <BottomStatusBar onItemPress={this.onItemPress} />}
        {loading && <LoadingView />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {},
  scrollView: {
    marginBottom: 50,
  },
});
