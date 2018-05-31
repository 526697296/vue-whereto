<template>
    <div class="homerecommend">
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendlist" :key="item.id">
                    <img class="item-img"
                    :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
        <a class="chan border-top">查看更多</a>
    </div>
</template>
<script>
export default {
    name: 'homerecommend',
    props:{
        recommendlist:{
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
.recommend-title
  margin-top .1rem
  color #333333
  background #eeeeee
  line-height 0.6rem
  text-indent .2rem
.chan
  display block
  padding .2rem 0
  color #00afc7
  font-size 0.28rem
  height 0.4rem
  text-align center
.item
  padding-top .1rem
  padding-bottom .1rem
  display flex
  overflow hidden
  height 2rem
  .item-img
    height 2rem
    width 2rem
  .item-info
    margin-left 0.2rem
    min-width 0
    flex 1
    .item-title
      margin-top .2rem
      line-height 0.54rem
      font-size 0.32rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .item-desc
      color #cccccc
      line-height 0.4rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .item-button
      background #ff9300
      border-radius .1rem
      padding 0 .2rem
      line-height 0.44rem
      margin-top 0.2rem
</style>
