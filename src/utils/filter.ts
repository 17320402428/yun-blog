/*
 * @Author: bin
 * @Date: 2023-12-12 11:48:03
 * @LastEditors: bin
 * @LastEditTime: 2023-12-12 14:36:33
 * @objectDescription: 入口文件
 */

//日期补0
const getzf = (num: number): string | number => {
  const numShow: string | number = num < 10 ? `0${num} ` : num
  return numShow
}
export const timestampToTime = (value: string | number | Date) => {
  let date = new Date(value*1000)
  let y = date.getFullYear()
  let MM = (date.getMonth() + 1) as number
  MM = MM < 10 ? (('0' + MM) as unknown as number) : MM
  let d = date.getDate()
  d = d < 10 ? (('0' + d) as unknown as number) : d
  let h = date.getHours()
  h = h < 10 ? (('0' + h) as unknown as number) : h
  let m = date.getMinutes()
  m = m < 10 ? (('0' + m) as unknown as number) : m
  let s = date.getSeconds()
  s = s < 10 ? (('0' + s) as unknown as number) : s
  return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
}
