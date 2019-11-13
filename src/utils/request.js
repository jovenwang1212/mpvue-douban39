const baseURL = 'https://api.douban.com'

function request (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      data: options.data || {},
      method: options.method || 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: options.dataType || 'json',
      success: res => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

export default request
