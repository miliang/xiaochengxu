// pages/pipefilm/pipefilm.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // _num:1,
    itemsrc: [
      { cname: "海上明珠国际影城(银泰店)", address: "武侯区益州大道18888号银泰城5楼", ctype: "IMAX厅", price: "19.9" },
      { cname: "海上明珠国际影城(银泰店)", address: "武侯区益州大道18888号银泰城5楼", ctype: "IMAX厅", price: "19.9" },
      { cname: "海上明珠国际影城(银泰店)", address: "武侯区益州大道18888号银泰城5楼", ctype: "IMAX厅", price: "19.9" },
      { cname: "海上明珠国际影城(银泰店)", address: "武侯区益州大道18888号银泰城5楼", ctype: "IMAX厅", price: "19.9" },
      { cname: "海上明珠国际影城(银泰店)", address: "武侯区益州大道18888号银泰城5楼", ctype: "IMAX厅", price: "19.9" }
    ],
    txtArray: [
      { id: '1', changecolor: false, txt: '4月1日' },
      { id: '2', changecolor: false, txt: '4月2日' },
      { id: '3', changecolor: false, txt: '4月3日' },
      { id: '4', changecolor: false, txt: '4月4日' },
    ]
  },

  changecolor: function (e) {
    // var _this=this;
    var txtArray = [];
    for (var i = 0; i < this.data.txtArray.length; i++) {
      if (e.target.id == this.data.txtArray[i].id) {
        txtArray[i] = { id:i + 1, changecolor: true, txt: '4月' + (i + 1) + '日' }
      }else {
       txtArray[i] = { id:i + 1, changeColor: false, txt: '4月' + (i + 1) + '日' }
      }
    }
    // console.log(txtArray)
    this.setData({
      txtArray: txtArray
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    var id = options.id
    console.log(id)
    wx.request({
      url: 'http://172.17.4.230:8888/singlefilm.do',
      data: {
        id
      },
      dataType: 'json',
      success: function (data) {
        console.log(data)
        _this.setData({
          itemsrc: data.data
          // imgUrls: data.data.imgUrls
        })
      }
    })
  },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // }
})