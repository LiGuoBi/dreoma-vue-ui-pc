// 日期格式化
export function dateFormat(date) {
  if (!(date instanceof Date)) { // 判断是否是 Date 对象
    // 时间戳转换为 Date 对象
    date = new Date(parseInt(date) * 1000)
  }
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  return year + '-' + turnNum(month) + '-' + turnNum(day) + ' ' + turnNum(hours) + ':' + turnNum(minutes) + ':' + turnNum(seconds)
}

function turnNum(val) {
  if (val >= 0 && val <= 9) {
    val = '0' + val
  }
  return val
}

/**
 * 日期字符串或Date对象转时间戳
 * @author 小炜 2019-07-11
 * @param strDate {String|Date} 日期字符串或Date对象
 * @return Numder
 */
export function strtotime(strDate) {
  if (strDate instanceof Date) { // 判断是否是 Date 对象
    return strDate.getTime()
  } else {
    let dateTemp = strDate.split(' ')
    let arrDate = dateTemp[0].split('-')
    let arrTime = dateTemp[1].split(':')
    let date = new Date(
      arrDate[0],
      arrDate[1]-1,
      arrDate[2],
      arrTime[0],
      arrTime[1],
      arrTime[2]
    )
    return date.getTime()
  }
}

// 动态添加script标签(字符串中获取到script的内容或者src地址添加到页面中)
export function addStrScript(str) {
  // 去除字符串的换行
  str = str.replace(/[\r\n]/g, '')
  // 取出字符串中的所有script标签
  let scriptArr = str.match(/<script[^>]*>(.*?)<\/script>/gi)
  // 循环取出script标签中的内容或者src
  if (scriptArr) {
    for (let i = 0, len = scriptArr.length; i < len; i++) {
      let scriptSrc = scriptArr[i]
      let scriptDom = document.createElement('script')
      scriptDom.type = 'text/javascript'
      if (scriptSrc.includes('src=')) {
        // match() 方法通过正则匹配返回一个数组 [1]获取数组下标1的内容(src中的路径)
        let src = scriptSrc.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i)[1]
        // 赋值scriptDom的src地址
        scriptDom.src = src
      } else {
        let content = scriptSrc.match(/<script[^>]*>(.*?)<\/script>/i)[1]
        // 赋值scriptDom的内容
        scriptDom.appendChild(document.createTextNode(content))
      }
      document.body.appendChild(scriptDom)
    }
  }
}

// 设置网页关键字及描述
export function webDesc(key, desc) {
  document.querySelector('meta[name="keywords"]').setAttribute('content', key)
  document.querySelector('meta[name="description"]').setAttribute('content', desc)
}

/**
 * 对象数组拆分成数组，或者字符串
 * @author 小炜 2019-06-11
 * @param array {Array} 需要拆分的对象数组
 * @param key {String} 对象的key
 * @param type {String} 返回的数据类型传入 str 返回字符串，不传返回数组
 * @return Array/String
 */
export function splitObjArr(array, key, type) {
  let arr = []
  array.forEach(item => {
    arr.push(item[key])
  })
  if (type == 'str') {
    return arr.toString()
  } else {
    return arr
  }
}