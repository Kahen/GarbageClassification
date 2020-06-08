// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "Needed": "投放要求", "img": "cloud://kahen-j254z.6b61-kahen-j254z-1302334735/recycle/可回收物-middle.png",
      "requirements": [
        "投放是应避免污染,尽量保持整齐干燥",
        "瓶罐类,饮品包装盒等有内容物的,应尽可能清空并清洁后压扁投放",
        "玻璃的尖锐易碎物品,最好是袋装或者用容器装好后投放"
      ],
      "category": "1",
      "name": "可回收物"
    }, {
      "Needed": "投放要求", "img": "cloud://kahen-j254z.6b61-kahen-j254z-1302334735/hazardous/有害垃圾-middle.png",
      "requirements": [
        "分类投放有害垃圾时应注意轻放",
        "废旧荧光灯管灯泡等易破损的，应连带包装或包裹后投放",
        "压力罐装容器，应排除内容物后投放"
      ],
      "category": "2",
      "name": "有害垃圾"
    }, {
      "Needed": "投放要求", "img": "cloud://kahen-j254z.6b61-kahen-j254z-1302334735/wet/湿垃圾-middle.png",
      "requirements": [
        "纯流质的食物垃圾应直接倒进下水口",
        "有包装物的应去除后分类投放",
        "盛放垃圾的容器在投放时应予去除"
      ],
      "category": "4",
      "name": "湿垃圾"
    }, {
      "Needed": "投放要求", "img": "cloud://kahen-j254z.6b61-kahen-j254z-1302334735/dry/干垃圾-middle.png",
      "requirements": [
        "易破损或已污染的，应连带包装或包裹后投放",
        "投放时保持周边环境整洁干净",
        "成分复杂难以分辨类别的生活垃圾，建议投入干垃圾/其他垃圾收集容器"
      ],
      "category": "8",
      "name": "干垃圾"
    }, {
      "Needed": "投放要求", "img": "cloud://kahen-j254z.6b61-kahen-j254z-1302334735/large/large.png",
      "requirements": [
        "大件垃圾应先进行环境化的处理后再资源化利用。大件垃圾交由环卫部门后，经专业的资源循环企业进行拆解，对可循环利用的部分进行回收再利用，对重金属和有毒物质等进行无害化处理",
        "大件垃圾应与其他生活垃圾分开储存和分类收运",
        "大件垃圾的定义、分类、收集和利用执行《大件垃圾收集和利用技术要求》"
      ],
      "category": "16",
      "name": "大件垃圾"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    for (let index = 0; index < this.data.list.length; index++) {
     if(this.data.list[index].category==options.category){
       console.log(this.data.list[index])
       this.setData({
         name:this.data.list[index].name,
         category:this.data.list[index].category,
         img:this.data.list[index].img,
         Needed:this.data.list[index].Needed,
         requirements:this.data.list[index].requirements
       })
       wx.setNavigationBarTitle({
         title: options.name,
       })
     }
    }
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