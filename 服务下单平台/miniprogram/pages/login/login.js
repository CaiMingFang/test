// login.js
Page({
  onLogin() {
    wx.getUserInfo({
      success: res => {
        const userInfo = res.userInfo
        // 这里可以将用户信息保存到全局变量中，或者发送到后台进行验证
        console.log(userInfo)
      },
      fail: res => {
        console.log('获取用户信息失败：', res)
      }
    })
  }
})
