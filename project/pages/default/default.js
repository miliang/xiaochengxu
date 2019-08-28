// pages/default/default.js
var imageUtil = require('../../utils/util.js');
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../../image/banner1.jpg',
      '../../image/banner2.jpg',
    ],
    imagewidth: 0,
    imageheight: 0,
    showSrc:[
      {src:"../../image/newest.jpg",content:"最新推荐"},
      {src:"../../image/hot.jpg",content:"热门菜谱"},
      {src:"../../image/popular.jpg",content:"人气菜肴"},
      {src:"../../image/coupon.jpg",content:"优惠券"}
    ],
    foodSrc:[
      {src:"../../image/single.png",content:"商务单人餐",price:"￥50.00",distribute:"销量：0"},
      { src: "../../image/lovesCup.png", content: "虐狗情人杯", price: "￥40.00", distribute: "销量：0"},
      { src: "../../image/chicken.png", content: "卤香滑鸡", price: "￥30.00", distribute: "销量：0"},
      { src: "../../image/cool.png", content: "酷炫绵绵球", price: "￥20.00", distribute: "销量：2"}
    ], 
    iconSrc:[
      {src:"../../image/service.png"},
      {src:"../../image/order.png"},
      {src:"../../image/shoppingCar.png"},
      {src:"../../image/goTop.png"}
        ]
  },
  goDetail: function () {
    console.log("1515");
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    console.log(123);
    var src=options.src;
    // 在这一步需要请求服务器
    wx:wx.request({
      url: 'http://127.0.0.1:8484/getIcons.do',
      data: {name:"e44444"},
      method: 'get',
      dataType: 'json',
      responseType: 'text',
      success: function(data) {
        console.log(data.data);
        var myarray=[];
        data.data.map((item,index)=>{
          // console.log(item);
          // console.log(index);
          myarray.push({id:item.icon_id,src:item.icon_src,content:icon-content})
          console.log(myarray)
        })
      _this.setData({
        showSrc:myarray
      })
      },
      fail: function(err) {
        console.log(err);
      },
      complete: function(res) {},
    })

  },
  imageLoad:function(e){
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth:imageSize.imageWidth,
      imageheight:imageSize.imageHeight
    })
  },

})