<template>
<div>
    <div class="banner" @click="handbannerclick">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_600x330_f2f668e4.jpg" alt="1">
        <div class="banner-info">
            <div class="banner-number">
                <span class="iconfont iconfont-2">&#xe6dd;</span>
                <em class="banner-em">79</em>
            </div>
            <div class="banner-title">
                世界之窗(AAAAAA景区)
            </div>
        </div>
    </div>
    <!-- 轮播组件 -->
    <gallary :imgs="imgs" v-show="showgallary" @close="handclose"></gallary>
    <div class="div22">1111</div>
</div>
</template>
<script>
import Gallary from '../../../common/gallary/Gallary.vue'
export default {
    name:'banner',
    data () {
        return {
            imgs: ["http://img1.qunarzz.com/sight/p0/1412/14/6d12e0e5d7457f739d1ff64970e2eeac.water.jpg_350x240_d40f2c2a.jpg","http://img1.qunarzz.com/sight/p0/1412/8c/6efd03e0e0694c2d3a6eace2789ca078.water.jpg_350x240_172012ea.jpg"],
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
        Gallary
    }
}
</script>
<style lang="stylus" scoped>
.div22
  height 1000px
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
