<template>
<div>
    <div class="banner" @click="handbannerclick">
        <img class="banner-img" :src="bannerImg" alt="1">
        <div class="banner-info">
            <div class="banner-number">
                <span class="iconfont iconfont-2">&#xe6dd;</span>
                <em class="banner-em">{{this.bannerImg.length}}</em>
            </div>
            <div class="banner-title">
                {{this.sightName}}
            </div>
        </div>
    </div>
    <!-- 轮播组件 -->
    <fade>
    <gallary :gallaryImgs="gallaryImgs" v-show="showgallary" @close="handclose"></gallary>
    </fade>
</div>
</template>
<script>
import Gallary from '../../../common/gallary/Gallary.vue'
import Fade from '../../../common/fade/Fade.vue'
export default {
    name:'banner',
    props: {
        sightName:{
            type:String
        },
        bannerImg:{
            type:String
        },
        gallaryImgs:{
            type:Array
        }
    },
    data () {
        return {
            showgallary: false
        }
    },
    methods: {
        handbannerclick () {
            this.showgallary = true
        },
        handclose () {
            this.showgallary = false
            
        }
    },
    components: {
        Gallary,
        Fade
    }
}
</script>
<style lang="stylus" scoped>
.banner
  overflow hidden
  height 0
  position relative
  padding-bottom 54%
  .banner-img
    width 100%
  .banner-info
    position absolute
    bottom .29rem
    left .2rem
    .banner-number
      background #000
      opacity .5
      color #ffffff
      width 1.2rem
      height 0.38rem
      position absolute
      bottom .5rem
      left 0
      font-size 0.24rem
      text-align center
      line-height 0.38rem
      border-radius .2rem
      .iconfont-2
        font-size 0.24rem
        display inline-block
      .banner-em
        margin-left 0.1rem
        display inline-block
    .banner-title
      color #ffffff
      font-size 0.36rem
      line-height 0.4rem
</style>
