// pages/demo/demo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    markers:[{
      iconPath:"/resources/others.png",
      id:0,
      latitude:30.67,
      longitude:104.06,
      width:50,
      height:50
    }],
    polyline:[{
      points:[{
        longitude:104.06,
        latitude:30.67
      },{
        longitude:104.94,
        latitude:30.57
      }],
      color:'#ff0000dd',
      width:2,
      dottedLine:true
    }],
    controls:[{
      id:1,
      icinPath:'/resources/location.png',
      position:{
        left:0,
        top:300 - 50,
        width:50,
        height:50
      },
      clickable:true
    }]
  },
  regionchange(e){
    console.log(e.type)
  },
  markertap(e){
    console.log(e.markerId)
  },
controltap(e){
  console.log(e.controlId)
}
})