/*
* @Author: Elory
* @Date:   2017-10-21 19:34:12
* @Last Modified by:   Elory
* @Last Modified time: 2017-10-21 20:43:57
*/
import {commonParams} from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 1076527728,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res)
  })
}