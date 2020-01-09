import React from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';

import Comment from '../screens/viewmodel/Comment';
import FastImage from 'react-native-fast-image';
import {Button} from 'react-native-elements';
import images from '../resources/images';

export interface CommentListViewProps {
  data: Comment[];
  onPraisePress?: (index: number, item: Comment) => void;
  refresh: number;
}
export interface CommentListViewState {}

/**
 * 评论列表
 */
export default class CommentListView extends React.PureComponent<
  CommentListViewProps,
  CommentListViewState
> {
  constructor(props: CommentListViewProps) {
    super(props);
  }

  public render() {
    const {data, refresh} = this.props;
    console.log(
      `****************************************CommentList render****************************************`,
    );
    return (
      <FlatList
        extraData={refresh}
        style={styles.flatList}
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item, index}) => this.renderItem({item, index})}
      />
    );
  }

  private renderItem = ({item, index}) => {
    console.log(`renderItem:id=${item.id},praise=${item.praise}`);
    const {onPraisePress} = this.props;
    const {praise} = item;
    const praiseText = praise ? praise : '赞';
    return (
      <View style={styles.item}>
        <FastImage
          style={{width: 30, height: 30, borderRadius: 15}}
          source={{uri: item.img}}
          resizeMode={'center'}
        />
        <View style={styles.contentWrapper}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.btnWrapper}>
              <Button
                onPress={() => {
                  if (onPraisePress) {
                    onPraisePress(index, item);
                  }
                }}
                containerStyle={[styles.transperent, styles.containerStyle]}
                buttonStyle={[styles.transperent, styles.buttonStyle]}
                icon={
                  <Image
                    source={images.icPraise}
                    style={{width: 16, height: 16}}
                  />
                }
                titleStyle={styles.btnTitleStyle}
                title={praiseText}
              />
            </View>
          </View>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  loadingContainer: {
    height: 20,
    flexDirection: 'row',
  },
  flatList: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  item: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  contentWrapper: {
    paddingLeft: 10,
    flexDirection: 'column',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
  },
  title: {
    color: '#050200',
    fontSize: 15,
  },
  content: {
    color: '#4C4C4D',
    marginTop: 8,
    fontSize: 14,
    flexWrap: 'wrap',
    minHeight: 40,
  },
  transperent: {
    backgroundColor: '#0000',
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerStyle: {
    backgroundColor: '#0000',
  },
  buttonStyle: {},
  btnTitleStyle: {
    marginLeft: 3,
    fontSize: 14,
    color: '#ABABAD',
  },
});
