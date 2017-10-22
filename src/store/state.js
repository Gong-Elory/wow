/*
* @Author: Elory
* @Date:   2017-10-20 14:40:21
* @Last Modified by:   Elory
* @Last Modified time: 2017-10-21 10:36:00
*/
import {playMode} from 'common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: true,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}

export default state