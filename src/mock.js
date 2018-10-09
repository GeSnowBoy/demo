var imgs = [
  'http://img4.imgtn.bdimg.com/it/u=1926421234,1074130284&fm=26&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=2884734401,924227120&fm=26&gp=0.jpg',
  'http://img3.imgtn.bdimg.com/it/u=2200166214,500725521&fm=26&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=967395617,3601302195&fm=26&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=2213670986,2923778817&fm=26&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=1654937742,1393289912&fm=26&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=3491496774,226966402&fm=26&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=240658679,2851772201&fm=26&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=3951056664,733952824&fm=26&gp=0.jpg'
]
var contents = [
  '俗话说："秋风起，蟹脚痒"，每年到了中秋国庆前后，吃大闸蟹已经成为江浙沪地区老百姓的一种饮食习惯。',
  '中国新闻网是知名的中文新闻门户网站,也是全球互联网中文新闻资讯最重要的原创内容供应商之一。',
  '实现shouldComponentUpdate时，不可突变的数据结构帮助我们轻松的追踪对象变化。这通常可以提供一个不错的性能提升。',
  '不过,大雄家里住着来自未来的机器猫——哆啦A梦,哆啦A梦经常会看到大雄被欺负忍不住拿出一些未来世界的“法宝”帮助他',
  '“十一”长假期间，银联网络交易总金额达到1.58万亿元，交易总笔数7.94亿笔，日均较去年国庆黄金周分别增长31.9%和24.5%。',
  '审查起诉期间，鲁山县人民检察院官微9月19日对该案进行了公开报道。但该案涉及未成年人及隐私，办案程序尚在进行，此间进行报道是错误的，并且报道中多处表述错误、用语明显不当，造成十分不良的社会影响。',
  '2018年10月8日，国务委员兼外交部长王毅在北京会见美国国务卿蓬佩奥。'
]
var names = ['孤标傲世', '爱笑的小猫', '天天开心', '光辉岁月', '似水流年', '心的生活']
var addresses = ['北京·天通苑', '北京·人民广场', '上海·万达广场', '天津·团结小区2号', '美国', '北京·北苑路北', '北京·龙德广场']
var users = [getMockUser(), getMockUser(), getMockUser()]

function getRandomArray (arr) {
  return arr.filter(() => getRandomBoolean())
}

function getRandomItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomBoolean () {
  return Math.random() > .5
}

let id = 0

function getMockNew () {
  return {
    address: getRandomItem(addresses),
    content: getRandomItem(contents),
    from: '今日头条E',
    id: id++,
    imgs: getRandomArray(imgs),
    isLike: false,
    likes: getRandomArray(users.slice(1)),
    reviewList: getRandomBoolean() ? [
      {answer: '秋衣盎然', content: '你去哪里了?'},
      {answer: '秋衣盎然', receive: '明明的明天', content: '这里的景色好美啊?'},
      {answer: '明明的明天', receive: '秋衣盎然', content: '是啊?'},
      {answer: '秋衣盎然', receive: '明明的明天', content: '你好,hello?'}
    ] : []
    ,
    time: '两天前',
    user: getRandomItem(users)
  }
}

function getMockUser () {
  return {name: getRandomItem(names), avator: getRandomItem(imgs)}
}

function getData (createFn, num = 5) {
  return new Array(num).fill(true).map(() => createFn())
}

export default {
  friendBody: getData(getMockNew, 10),
  friendHeader: {
    bgImg: getRandomItem(imgs),
    user: users[0]
  },
  user: users[0]
}
