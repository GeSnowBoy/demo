var imgs = ['https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png', 'https://nos.netease.com/cloud-website-bucket/201809280923541cd18a5f-4e1a-4845-a987-dd45a03e87cb.jpeg', 'https://t10.baidu.com/it/u=3611759130,603024123&fm=76', 'https://t11.baidu.com/it/u=3938611486,4054412317&fm=76', 'https://f11.baidu.com/it/u=2351466733,3049582714&fm=76', 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=73443062281f95cab9f594b6f9177fc5/72f082025aafa40fafb5fbc1a664034f78f019be.jpg', 'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=81fa753f7f8b4710d12ffbccf3cec3b2/b64543a98226cffc254c32acb4014a90f603ea4e.jpg']
var users = [{name: '孤标傲世', avator: getRandomImg()}, {name: '爱笑的小毛', avator: getRandomImg()}]

function getRandomImg () {
  return imgs[Math.floor(Math.random() * imgs.length)]
}

function getRandomImgs () {
  return imgs.filter(() => getRandomBoolean())
}

function getRandomBoolean () {
  return Math.random() > .5
}

export default {
  friendBody: [
    {
      address: '北京.星辰广场',
      content: '这是内容哦???????????????',
      from: '口袋精灵E',
      id: 1,
      imgs: [getRandomImg()],
      isLike: false,
      likes: [],
      reviewList: [
        {answer: '小红', receive: '小明', content: '地方法规的法国队和对方更好看过分的话对方公司分管水电费水电费大法官好地方,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'},
        {answer: '小红', content: '你好,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'}
      ]
      ,
      time: '两天前',
      user: users[0]
    }, {
      address: '北京.星辰广场',
      content: '这是内容哦???????????????',
      from: '口袋精灵E',
      id: 3567,
      imgs: getRandomImgs(),

      likes: [users[1]],
      reviewList: [
        {answer: '小红', receive: '小明', content: '地方法规的法国队和对方更好看过分的话对方公司分管水电费水电费大法官好地方,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'},
        {answer: '小红', content: '你好,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'}
      ]
      ,
      time: '两天前',
      user: {avator: getRandomImg(), name: '孤标傲世',}
    }, {
      address: '北京.星辰广场',
      content: '这是内容哦???????????????',
      from: '口袋精灵E',
      id: 278,
      imgs: getRandomImgs(),
      likes: [users[0]],
      reviewList: [],
      time: '两天前',
      user: {avator: getRandomImg(), name: '孤标傲世',},

    },
    {
      address: '北京.星辰广场',
      content: '这是内容哦???????????????',
      from: '口袋精灵E',
      id: 7451,
      imgs: getRandomImgs(),
      isLike: false,
      likes: [],
      reviewList: [
        {answer: '小红', receive: '小明', content: '地方法规的法国队和对方更好看过分的话对方公司分管水电费水电费大法官好地方,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'},
        {answer: '小红', content: '你好,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'}
      ]
      ,
      time: '两天前',
      user: {avator: getRandomImg(), name: '孤标傲世',}
    }, {
      address: '北京.星辰广场',
      content: '这是内容哦???????????????',
      from: '口袋精灵E',
      id: 743,
      imgs: getRandomImgs(),

      likes: [users[0]],
      reviewList: [
        {answer: '小红', receive: '小明', content: '地方法规的法国队和对方更好看过分的话对方公司分管水电费水电费大法官好地方,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'},
        {answer: '小红', content: '你好,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'}
      ]
      ,
      time: '两天前',
      user: {avator: getRandomImg(), name: '孤标傲世',}
    }, {
      address: '北京.星辰广场',
      content: '这是内容哦???????????????',
      from: '口袋精灵E',
      id: 23453,
      imgs: getRandomImgs(),
      likes: [users[0]],
      reviewList: [],
      time: '两天前',
      user: {avator: getRandomImg(), name: '孤标傲世',},

    },
    {
      address: '北京.星辰广场',
      content: '这是内容哦???????????????',
      from: '口袋精灵E',
      id: 153,
      imgs: getRandomImgs(),
      isLike: false,
      likes: [],
      reviewList: [
        {answer: '小红', receive: '小明', content: '地方法规的法国队和对方更好看过分的话对方公司分管水电费水电费大法官好地方,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'},
        {answer: '小红', content: '你好,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'}
      ]
      ,
      time: '两天前',
      user: {avator: getRandomImg(), name: '孤标傲世',}
    }, {
      address: '北京.星辰广场',
      content: '这是内容哦???????????????',
      from: '口袋精灵E',
      id: 33214,
      imgs: getRandomImgs(),

      likes: [users[0]],
      reviewList: [
        {answer: '小红', receive: '小明', content: '地方法规的法国队和对方更好看过分的话对方公司分管水电费水电费大法官好地方,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'},
        {answer: '小红', content: '你好,hello?'},
        {answer: '小红', receive: '小明', content: '你好,hello?'}
      ]
      ,
      time: '两天前',
      user: {avator: getRandomImg(), name: '孤标傲世',}
    }, {
      address: '北京.星辰广场',
      content: '这是内容哦???????????????',
      from: '口袋精灵E',
      id: 221,
      imgs: getRandomImgs(),
      likes: [users[0]],
      reviewList: [],
      time: '两天前',
      user: {avator: getRandomImg(), name: '孤标傲世',},

    }
  ],
  friendHeader: {
    bgImg: getRandomImg(),
    user: users[0]
  },
  user: users[0]
}
