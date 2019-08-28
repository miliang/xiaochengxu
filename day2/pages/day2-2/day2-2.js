// pages/day2-2/day2-2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray:[
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    isShow:true
  },
addArray(){
  var length = this.data.objectArray.length;
  // 合并数组，concat添加进去的在最上面，push添加进去的在末尾
  var newArray = [{id:length,unique:"unique_"+length}].concat(this.data.objectArray);
  this.setData({
    objectArray:newArray
  })
},
showView(){
  this.setData({
    isShow : !this.data.isShow
  })
},
goDay2(){
  wx.navigateTo({
    url: '/pages/day2/day2?id='+this.data.show,
  })
},
// 打电话
callphone(){
  wx.makePhoneCall({
    phoneNumber: '18383075381',
  })
}
})