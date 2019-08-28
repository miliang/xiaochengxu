//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../image/1.jpg',
      '../../image/2.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    itemsrc:[
      // { src: "../../image/filmDetail.png", filename: "从你的全世界路过", describ: "那曾经打动你的，还会继续温暖你",actor:"邓超/白百何/杨洋/张天爱/岳云鹏/柳岩",mark:"7.9分",buy:"购票"},
      // { src: "../../image/filmDetail.png", filename: "从你的全世界路过", describ: "那曾经打动你的，还会继续温暖你", actor: "邓超/白百何/杨洋/张天爱/岳云鹏/柳岩", mark: "7.9分", buy: "购票" },
      // { src: "../../image/filmDetail.png", filename: "从你的全世界路过", describ: "那曾经打动你的，还会继续温暖你", actor: "邓超/白百何/杨洋/张天爱/岳云鹏/柳岩", mark: "7.9分", buy: "购票" },
      // { src: "../../image/filmDetail.png", filename: "从你的全世界路过", describ: "那曾经打动你的，还会继续温暖你", actor: "邓超/白百何/杨洋/张天爱/岳云鹏/柳岩", mark: "7.9分", buy: "购票" },
      // { src: "../../image/filmDetail.png", filename: "从你的全世界路过", describ: "那曾经打动你的，还会继续温暖你", actor: "邓超/白百何/杨洋/张天爱/岳云鹏/柳岩", mark: "7.9分", buy: "购票" }
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    var _this=this;
    wx.request({
      url: 'http://172.17.4.230:8888/hotfilmData.do',
      data:{
    
      },
      dataType:'json',
      success:function(data){
        // var imgUrls =[];
        // data.data.map(function(){
        //   imgUrls.push(item.)
        // })
        console.log(data)
        _this.setData({
          itemsrc: data.data.itemsrc,
          imgUrls: data.data.imgUrls
        })
      }
    })
  },

  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  goBuy:function(e){
    console.log(e)
  }

})
