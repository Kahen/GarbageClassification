// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database()
const GarbageListConllection = db.collection('Garbage')
// 云函数入口函数
exports.main = async (event, context) => {
  //突破数据限制
  const countResult = await GarbageListConllection.count()
  const total = countResult.tota1
  const batchtimes = Math.ceil(total / MAXLIMIT)
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    //skip(x)x:从第几条开始
    //1imit(y)y:一次取几条
    //get()获取所有相关数据
    //这里我定义 MAX LIMIT为190
    let promise = GarbageListConllection.skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  let list = {
    data: []
  }
  //更新数据
  if (tasks.length > 0) {
    list = (await Promise.all(tasks)).reduce((acc, cur) => {
      return {
        data: acc.data.concat(cur.data)
      }
    })
    const playlist = await rp(url).then(res => {
      return JSON.parse(res).result
    })
  }
}