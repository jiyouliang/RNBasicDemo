import Comment from "./Comment";

export default class ArticleViewModel {
  public getCommentList = async () => {
    const result = await fetch('http://jiyouliang.com/demo/videos.json');
    const success = result.status == 200;
    // 模拟返回网络数据
    const commetList = [
      {
        id:1,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 0,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦'
      },
      {
        id:2,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 0,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦,这是评论内容哦哦噢噢噢哦哦哦哦哦。我爱你中国🇨🇳🇨🇳🇨🇳🇨🇳🇨🇳🇨🇳🇨🇳'
      },
      {
        id:3,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 0,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦，这是评论内容哦哦噢噢噢哦哦哦哦哦，这是评论内容哦哦噢噢噢哦哦哦哦哦，这是评论内容哦哦噢噢噢哦哦哦哦哦，这是评论内容哦哦噢噢噢哦哦哦哦哦，这是评论内容哦哦噢噢噢哦哦哦哦哦，这是评论内容哦哦噢噢噢哦哦哦哦哦'
      },
      {
        id:4,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 0,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦'
      },
      {
        id:5,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 0,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦'
      },
      {
        id:6,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 5,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦'
      },
      {
        id:7,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 0,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦'
      },
      {
        id:8,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 0,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦'
      },
      {
        id:9,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 10,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦'
      },
      {
        id:10,
        name: '老于',
        img:
          'https://mmbiz.qpic.cn/mmbiz_jpg/SibpF7Y87uADw9s7icApQiaPs5asKVULk8eTTZwMFn3lX2654pItGsvU6PpluJJib0oOZn0jESAbQ9MW9t5S5SlsdQ/640?wx_fmt=jpeg',
        praise: 5,
        content:'这是评论内容哦哦噢噢噢哦哦哦哦哦'
      },
    ];
    return {success, commetList};
  };

  public senPraise = async() => {
    // 模拟网络耗时操作
    // const result = await fetch('https://www.baidu.com')
    const result = await fetch('https://github.com')
    const success = result.status == 200
    return {success}
  }
}
