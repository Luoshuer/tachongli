//index.js
//获取应用实例
const app = getApp()
var API = require('../../utils/apiSwiper.js')

Page({
  data: {
    tabs: [],
    activeTab: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')

    const titles = ['生活', '它们', '资讯']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})

    var that = this
    
    // Mock 轮播图
    API.ajax('', function (res) {
        //这里既可以获取模拟的res
        console.log(res)
        that.setData({
            list:res.data
        })
    });

    console.log(this.data.list)

  },

  onTabCLick: function(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange: function(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
