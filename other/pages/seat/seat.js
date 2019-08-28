Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    items1:[],  
    seattext:[],
    newarry:[],
    zuoarry:[{hang:"",lie:""}],
    rowtext:[]
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var items11=[];
    var items12 = [];
    // var item1=[];
    for(var i=0;i<12;i++){
        items11.push(i)
    }//座位数
    for (var i = 0; i < 3; i++) {
      items12.push(i)
    }//最后一排座位数

    var rowtext=[];
    for(i=1;i<=9;i++){
      rowtext.push(i+"排")
    }

    this.setData({
      items: items11,
      items1: items12,
      rowtext: rowtext
    })


  },

  mycheck(option) {
    // console.log(option)
    // console.log(option.target.id)
    var myid = option.target.id;
    var myarry = myid.split("-");
    var hang = parseInt(myarry[0]) + 1;
    var lie = parseInt(myarry[1]) + 1;
    // var newarry1=[];
    var newarry1;
    // var newarry2 = [myid]
    newarry1 = this.data.newarry;
    newarry1.push(myid)
    // newarry1.concat(newarry2)
    // console.log(this.data.newarry)
    // console.log(newarry1)
    // console.log(newarry1.length)

    this.setData({
      newarry: newarry1
    })
    // console.log(this.data.newarry);
    var hangarry1="";
    var liearry1="";
    var zuoarry1=[];
    var obj={};
    for (var i = 0; i < newarry1.length;i++){
      var gethandl=this.data.newarry[i].split("-");
      hangarry1 = parseInt(gethandl[0])+1;
      liearry1 = parseInt(gethandl[1]) + 1; 
      obj = { hang: hangarry1+"排", lie: liearry1+"座"}; 
      zuoarry1.push(obj);
    } 

    this.setData({
      zuoarry: zuoarry1
    })
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
    
  },
  
})