/*
 * @Author: jsjzh
 * @Email: kimimi_king@163.com
 * @LastEditors: jsjzh
 * @Date: 2019-03-06 14:39:11
 * @LastEditTime: 2019-04-29 16:02:41
 * @Description:
 *  数据为何要解构再变为一个 obj，因为需要知道该接口所接收的数据
 *  若有默认参数则可以直接加入 default: 'default'
 */
import { post, get } from './service'

/**
 * 获取自定义报表的组件列表
 */
export function getcomponentinfo() {
  return get('/getcomponentinfo', {})
}
/**
 * 获取自定义报表列表
 */
export function getreportstructurelist() {
  return get('/getreportstructurelist', {})
}
/**
 * 新增自定义报表
 * @param {string} title
 * @param {array} children
 */
export function operatestructureinfo({ title, children }) {
  return post('/operatestructureinfo', { title, children })
}
/**
 * 删除自定义报表
 * @param {string} reportUnionKey
 */
export function delstructureinfo({ reportUnionKey }) {
  return post('/delstructureinfo', { reportUnionKey })
}
/**
 * 获取某一报表详细布局信息
 * @param {string} reportUnionKey
 */
export function getreportcomponentinfo({ reportUnionKey }) {
  return get('/getreportcomponentinfo', { reportUnionKey })
}
