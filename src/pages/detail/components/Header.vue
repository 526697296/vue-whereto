<template>
    <div class="detailheader">
        <router-link tag="div" to="/" class="header-abs" v-show="showabs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showabs" :style="optionStyle">
            <router-link tag="div" to="/">
                <span class="iconfont header-fxied-back">&#xe624;</span>
                景点详情
            </router-link>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'detailheader',
    data () {
        return {
            showabs: true,
            optionStyle: {
                opacity: 0
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handscroll)
    },
    methods: {
        handscroll () {
            const p = document.documentElement.scrollTop;
            if(p > 10) {
                const opacity = p / 140;
                this.optionStyle = {
                    opacity
                }
                this.showabs = false
            }else{
                this.showabs = true
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  background #00bcd4
  color #ffffff
  font-size 0.32rem
  text-align center
  height .88rem
  line-height .88rem
  .header-fxied-back
    position absolute
    left .1rem
    top 0
.header-abs
  position absolute
  left .1rem
  top .1rem
  width .8rem
  line-height 0.8rem
  text-align center
  height .8rem
  border-radius .4rem
  background rgba(0,0,0,0.5)
  .header-abs-back
    color #ffffff
    font-size 0.4rem
</style>
