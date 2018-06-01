<template>
    <div class="cityapl">
        <ul class="list">
            <li class="item" v-for="(item, key) in cities" :key="key">{{key}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        cities: {
            type:Object
        }
    },
    name:'cityapl',
    data () {
        return {

        }
    }
}
</script>
<style lang="stylus" scoped>
.list
  color #00bcd4
  position absolute
  right 0 
  bottom 0
  width .4rem
  text-align center
  display flex
  flex-direction column
  justify-content center
  top 2.2rem
  .item 
    height 0.4rem
    // color 
</style>
