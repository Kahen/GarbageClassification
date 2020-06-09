const db=wx.cloud.database()
Page({
  data: {
    searchValue:'',
    isEndOfList: false,
    list: [],
    limit: 20, //每次拉取数量
    key:''
  },

  // 搜索页面跳回
  onLoad: function (options) {
    if (options && options.searchValue){
      this.setData({
        searchValue: "搜索："+options.searchValue,
        key:options.searchValue
      });
      this.getData(this.data.key)
    }
    
  },
getData(key){
  db.collection("Garbage")
  .where({	 	//collectionName 表示欲模糊查询数据所在collection的名
    name:{								//columnName表示欲模糊查询数据所在列的名
      $regex:'.*' + key + '.*',		//queryContent表示欲查询的内容，‘.*’等同于SQL中的‘%’
      $options: '1'							//$options:'1' 代表这个like的条件不区分大小写
    }
  })
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
  // 搜索入口  
  wxSearchTab: function () {
    wx.redirectTo({
      url: '../search/index'
    })
  },
  onReachBottom: function() {
    !this.data.isEndOfList && this.getData(this.data.key)
  }
})
