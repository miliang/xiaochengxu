// pages/mine/mine.js
var imageUtil = require('../../utils/util.js');
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemArray:[
      { src:"../../image/orders.png",content:"我的订单"},
      { src: "../../image/position.png", content: "收货地址" },
      { src: "../../image/car.png", content: "购物车" },
      { src: "../../image/inform.png", content: "系统通知" }, 
      { src: "../../image/user.png", content: "会员卡" },
      { src: "../../image/ticket.png", content: "优惠券" },
      { src: "../../image/integral.png", content: "积分" },
      { src: "../../image/services.png", content: "联系我们" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})