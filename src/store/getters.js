/*
* @Author: Elory
* @Date:   2017-10-20 14:40:52
* @Last Modified by:   Elory
* @Last Modified time: 2017-10-21 09:54:55
*/
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = state => {
  return state.playlist[state.currentIndex] || {}
}