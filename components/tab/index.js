// components/tab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据 
   */
  data: {
    tab:[{
      id:0,
      name:'精选'
    },{
      id:1,
      name:'关注'
    },{
      id:2,
      name:'消息'
    },{
      id:3,
      name:'附近'
    }],
    num: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectIndex:function(e){
      let tab = e.currentTarget.dataset.text
      let index = e.currentTarget.dataset.index
      let num = e.currentTarget.dataset.index
      this.curIndex = e.currentTarget.dataset.index

      var that = this
      this.setData({
        curIndex:index,
        num:index
      })
      switch(tab){
        case '精选':
          wx.switchTab({
            url: '../index/index'
          });
          break
        case '关注':
          wx.navigateTo({
            url: '../indexAtten/index'
          });
          break
        case '消息':
          wx.navigateTo({
            url: '../indexMess/index'
          });
          break
        case '附近':
          wx.navigateTo({
            url: '../indexNear/index'
          });
          break
          default:
            break
      }
    }
  }
})
