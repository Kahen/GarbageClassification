var WxSearch = require('../../wxSearchView/wxSearchView.js');
var list=require('../search/data');//搜索词库
const db=wx.cloud.database()
Page({
  data: {},

  // 搜索栏
  onLoad: function (options) {
    db.collection("Garbage").where({	 	//collectionName 表示欲模糊查询数据所在collection的名
      name:{								//columnName表示欲模糊查询数据所在列的名
        $regex:'.*' + "" + '.*',		//queryContent表示欲查询的内容，‘.*’等同于SQL中的‘%’
        $options: '1'							//$options:'1' 代表这个like的条件不区分大小写
      }
    }).get(
      {success: function (res) {
       console.log("success", res)
       that.setData({
         result: res.data,
       })
     },
     fail: function (res) {
       console.log("fail", res)
     }}
    )
    var that = this;
    WxSearch.init(
      that,  // 本页面一个引用
      ['塑料', '奶茶', "渣男", "狗", '电池', '湿巾','打火机','酸奶'], // 热点搜索推荐，[]表示不使用
      list.List,// 搜索匹配，[]表示不使用
      that.mySearchFunction, // 提供一个搜索回调函数
      that.myGobackFunction //提供一个返回回调函数
    );
  },

  // 转发函数,固定部分
  wxSearchInput: WxSearch.wxSearchInput,  // 输入变化时的操作
  wxSearchKeyTap: WxSearch.wxSearchKeyTap,  // 点击提示或者关键字、历史记录时的操作
  wxSearchDeleteAll: WxSearch.wxSearchDeleteAll, // 删除所有的历史记录
  wxSearchConfirm: WxSearch.wxSearchConfirm,  // 搜索函数
  wxSearchClear: WxSearch.wxSearchClear,  // 清空函数

  // 搜索回调函数  
  mySearchFunction: function (value) {
    // do your job here
    // 跳转
    wx.redirectTo({
      url: '../seachResult/index?searchValue='+value
    })
  },

  // 返回回调函数
  myGobackFunction: function () {
    // do your job here
    // 跳转
    wx.redirectTo({
      url: '../index/index?searchValue=返回'  
    })
  }

})
