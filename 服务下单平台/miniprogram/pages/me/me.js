// pages/me/me.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息
    this.setData({
      userInfo: getApp().globalData.userInfo
    })
  },

  /**
   * 点击“我的订单”按钮的事件处理函数
   */
  onTapMyOrders: function () {
    wx.navigateTo({
      url: '/pages/orders/orders',
    })
  }
})