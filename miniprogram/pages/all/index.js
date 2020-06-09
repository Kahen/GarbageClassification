const db = wx.cloud.database()
const _ = db.command
const col = "Garbage"

Page({

  data: {
    searchValue:'',
    isEndOfList: false,
    list: [],
    limit: 20, //每次拉取数量
    key:null,
    sql:{}
    ,
    menu:[{name:"全部",category:null},
      {
      name:"可回收物",
      category:1
    },{
      name:"有害垃圾",
      category:2
    },{
      name:"湿垃圾",
      category:4
    },{
      name:"干垃圾",
      category:8
    },{
      name:"大件垃圾",
      category:16
    }]
  },
  onReady:function(){
console.log("页面刷新了")
this.setData({
  list:[]
})
  },
  onLoad: function(options) {
    this.getData()
  },
// 搜索入口  
wxSearchTab: function () {
  wx.redirectTo({
    url: '../search/index'
  })
},
SwitchCategory : function(event){
  
  console.log(event.currentTarget.dataset['index'])
  this.onReady()
  this.setData({
    key:event.currentTarget.dataset['index']
  })
  this.getData(this.data.key)
  }
,
  getData(key){
  if(key!=null){
  this.setData({
    sql:{category:key}
  })
}else{
  this.setData({
    sql:{}
  })
}
  db.collection("Garbage")
  .where(	 	//collectionName 表示欲模糊查询数据所在collection的名
    this.data.sql
  )
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
    !this.data.isEndOfList && this.getData(this.data.key)
  }
})