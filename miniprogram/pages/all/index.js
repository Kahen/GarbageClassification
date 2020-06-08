const db = wx.cloud.database()
const _ = db.command
const col = "Garbage"
const sql = {
   //category:16
} //获取所有记录

Page({

  data: {
    isEndOfList: false,
    list: [],
    limit: 20 //每次拉取数量
  },

  onLoad: function(options) {
    this.getData()
  },

  getData: function() {
    db.collection(col)
      .where(sql)
      .skip(this.data.list.length)
      .limit(this.data.limit)
      .get()
      .then(res => {
        this.setData({
          list: [...this.data.list, ...res.data], //合并数据
          isEndOfList: res.data.length < this.data.limit ? true : false //判断是否结束
        })
      })
  },

  onReachBottom: function() {
    !this.data.isEndOfList && this.getData()
  }
})