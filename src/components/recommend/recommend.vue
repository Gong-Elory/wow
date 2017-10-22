<template>
    <div class="recommend" ref="recommend">
        <scroll class="recommend-content" :datas="recommendsList" ref="list">
          <div>
            <div  class="slider-wrapper">
              <div v-if="recommends.length" class="slider-content">
                <slider >
                  <div   v-for="item in recommends">
                    <a :href="item.linkUrl">
                      <img class="needsclick" :src="item.picUrl" />
                    </a>
                  </div>
                </slider>
              </div>
            </div>
            <div class="recommend-list">
                <h1 class="list-title">热门歌曲推荐清单</h1>
                <ul>
                  <li v-for="item in recommendsList" class="item">
                    <div class="icon">
                      <img width="60" height="60" v-lazy="item.imgurl" :alt="item.dissname">
                    </div>
                    <div class="text">
                      <h2 class="name" v-html="item.creator.name"></h2>
                      <p class="desc" v-html="item.dissname"></p>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
          <div class="loading-container" v-show="!recommendsList.length">
            <loading></loading>
          </div>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider'
  import {getRecommend, getRecommendList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import Scroll from 'base/scroll'
  import Loading from 'base/loading/loading'
  import {playlistMixin} from 'common/js/mixin'

  export default {
    mixins: [playlistMixin],
    created() {
      this._getRecommend()
      this._getRecommendList()
    },
    data() {
      return {
        recommends: [],
        recommendsList: []
      }
    },
    components: {
      slider: Slider,
      scroll: Scroll,
      loading: Loading
    },
    methods: {
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.recommend.style.bottom = bottom
        this.$refs.list.refresh()
      },
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getRecommendList() {
        getRecommendList().then((res) => {
          if (res.code === ERR_OK) {
            this.recommendsList = res.data.list
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        padding-top: 40%
        height: 0
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>