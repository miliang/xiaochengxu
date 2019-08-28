// pages/day2/day2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myname:'demo148'
  },
  changeName(e){
    // 
    console.log(e.currentTarget.dataset.name);//获取data-name的值
    // 获取当前myname的值
    console.log(this.data.myname);//demo148
    // 将myname的值进行更改
    this.setData({
      myname:e.currentTarget.dataset.name
    })
  },
  // bindtap会向上冒泡；catchtap不会像上冒泡
  handleTap1(){
    console.log('1被按下');
  },
  handleTap2(e){
    console.log('2被按下');
    console.log('最中间的view===='+e.target.dataset.name)
  },
  handleTap3(e){
    console.log('3被按下');
    console.log('最小的view====='+e.currentTarget.dataset.name);
  },
 onLoad(options){
    console.log(options.id);//undefined
 }
})