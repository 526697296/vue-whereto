<template>
    <div class="homecity">
        <div class="city-header">
            城市选择
        <div @click="gotoback" class="iconfont header-back">&#xe624;</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'homecity',
    data () {
        return {

        }
    },
    methods:{
        gotoback () {
            this.$router.push('/')
        }
    }

}
</script>
<style lang="stylus" scoped>
.city-header
  position relative
  overflow hidden
  height 0.68rem
  line-height 0.68rem
  text-align center
  color #ffffff
  background #00bcd4
  .header-back
    position absolute
    left .2rem
    top 0
    font-size 0.4rem
</style>
