/*
* @Author: Elory
* @Date:   2017-10-18 17:04:37
* @Last Modified by:   Elory
* @Last Modified time: 2017-10-19 15:02:11
*/
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platfrom: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getRecommendList() {
  const url = '/api/getRecommendList'

  const data = Object.assign({}, commonParams, {
    rnd: Math.random(),
    picmid: 1,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    outCharset: 'utf-8',
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}