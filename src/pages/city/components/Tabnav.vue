<template>
    <div class="citynav">
        <ul class="city-ul">
            <router-link class="city-li" tag="li" to="/search">
                境内
            </router-link>
            <router-link class="city-li" tag="li" to="/searcht">
                境外/港澳台
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'citynav',
    data () {
        return {

        }
    },
    components:{
    }
}
</script>
<style lang="stylus" scoped>
.citynav
  height 0.4rem
  line-height 0.4rem
  background #00bcd4
  color #ffffff
  padding .2rem 0
  .city-ul
    border 1px solid #ffffff
    border-radius .08rem
    overflow hidden
    width 60%
    margin 0 auto .16rem
    height 100%
    .city-li
      float left
      width 50%
      text-align center
      font-size 0.28rem
    .router-link-active
      background #fff
      color #00bcd4
</style>
