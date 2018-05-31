<template>
    <div class="homecity">
        城市选择
        <div @click="gotoback" class="iconfont header-back">&#xe624;</div>
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
.homecity
  position relative
  overflow hidden
  height 0.86rem
  line-height 0.86rem
  text-align center
  color #ffffff
  background #00bce4
  .header-back
    position absolute
    left .2rem
    top 0
    font-size 0.4rem
</style>
