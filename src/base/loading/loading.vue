<template>
  <div class="loading">
    <img src="./loading.gif" height="24" width="24" />
    <p class="desc" v-text="title"></p>
  </div>
</template>
<style scoped ref="stylesheet/stylus" lang="stylus">
  @import "~common/stylus/variable"

  .loading
    width: 100%
    text-align: center
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>