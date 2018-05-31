<template>
  <div class="homeheader">
    <div class="header-left">
        <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
        <input type="text" class="text" placeholder="请输入城市/景点/游玩主题">
    </div>
    <div class="header-right">{{this.city}}
        <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'homeader',
  props:{
    city:{
      type:String
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/var.styl';
.homeheader
  display flex
  height .86rem
  line-height 0.86rem
  background $bgcolor
  color #fff
  .header-left
    width .64rem
    float left
    .iconfont
      text-align center
      font-size 0.4rem   
  .header-input
    flex: 1
    background #ffffff
    border-radius .1rem
    height 0.64rem
    line-height 0.64rem
    margin-top 0.11rem
    margin-left 0.2rem
    color #cccccc  
    .text
      height 0.64rem
      line-height 0.64rem
      border none  
      border-radius .1rem
      width 100%
  .header-right
    width 1.24rem
    float right
    text-align center
    .iconfont
      font-size 0.24rem         
</style>
