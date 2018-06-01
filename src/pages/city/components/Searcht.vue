<template>
    <div class="citysearcht border-top">
        <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>
<script>
export default {
    name: 'citysearcht',
    data () {
        return {

        }
    },
    components:{
    }
}
</script>
<style lang="stylus" scoped>
.citysearcht
  background #eeeeee
  height 0.72rem
  line-height 0.72rem
  width 100%
  .search-input
    width 100%
    padding 0 .1rem
    box-sizing border-box
    height 0.56rem
    line-height 0.56rem
    text-align center
    color #cccccc
    border-radius .1rem
</style>
