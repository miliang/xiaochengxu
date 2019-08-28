Page({
  data:{
    txtArray: [
      { id: '1', changecolor: false, txt: '4月1日' },
      { id: '2', changecolor: false, txt: '4月2日' },
      { id: '3', changecolor: false, txt: '4月3日' },
      { id: '4', changecolor: false, txt: '4月4日' },
    ],
    contentitem:[
      { stime: '09:00', etime: '14:30', type: '英语3D', hall: '七号厅', price: '51', buy:"购票"},
      { stime: '11:00', etime: '12:30', type: '英语3D', hall: '三号厅', price: '48', buy: "购票" },
      { stime: '11:25', etime: '15:30', type: '英语3D', hall: '二号厅', price: '37', buy: "购票" },
      { stime: '12:00', etime: '16:30', type: '英语3D', hall: '一号厅', price: '30', buy: "购票" },
      { stime: '14:00', etime: '15:30', type: '英语3D', hall: '五号厅', price: '55', buy: "购票" },
      { stime: '12:00', etime: '13:30', type: '英语3D', hall: '七号厅', price: '80', buy: "购票" },
      { stime: '12:00', etime: '13:30', type: '英语3D', hall: '七号厅', price: '51', buy: "购票" }
    ]
  },
  changecolor: function (e) {
      // var _this=this;
      var txtArray = [];
      for (var i = 0; i < this.data.txtArray.length; i++) {
        if (e.target.id == this.data.txtArray[i].id) {
          txtArray[i] = { id: i + 1, changecolor: true, txt: '4月' + (i + 1) + '日' }
        } else {
          txtArray[i] = { id: i + 1, changeColor: false, txt: '4月' + (i + 1) + '日' }
        }
      }
      // console.log(txtArray)
      this.setData({
        txtArray: txtArray
      })
  }
})