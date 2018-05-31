<template>
    <div class="homeweekend">
        <div class="week-title">周末去哪儿</div>
        <div class="week-content" v-for="item in weekendlist" :key="item.id">
            <div class="week-img">
                <img class="img"
                 :src="item.imgUrl" alt="">
            </div>
            <div class="week-info">
                <p class="p-week-title">{{item.title}}</p>
                <p class="p-week-desc">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'homeweekend',
    props:{
        weekendlist:{
            type:Array
        }
    },
    data () {
        return {
        }
    }
}
</script>
<style lang="stylus" scoped>
.week-title
  height 0.8rem
  line-height 0.8rem
  text-indent .2rem
  color #333
  background #eeeeee
.week-img
  overflow hidden
  height 0
  padding-bottom 37.43%
  .img
    width 100%
.week-info
  padding .14rem .2rem .2rem .2rem
  .p-week-title
    overflow hidden
    color #212121
    height 0.48rem
    line-height 0.48rem
    font-size 0.28rem
    text-overflow ellipsis
    white-space nowrap 
  .p-week-desc
    overflow hidden
    color #212121
    height 0.42rem
    line-height 0.42rem
    font-size 0.24rem
    text-overflow ellipsis
    white-space nowrap 
</style>
