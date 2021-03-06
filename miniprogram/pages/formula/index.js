// pages/formula/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "recycle": {
      "title": "可回收物记材质",
      "content": "玻,金,塑,纸,衣"
    },
    "hazardous": {
      "title": "有害垃圾记口诀",
      "content": "药(要)漆(吃)电灯"
    },
    "wet": { "title": "湿垃圾记原则", "content": "易腐烂,易粉碎" },
    "dry": "其余全是干垃圾!"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "分类口诀"
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

  }
})