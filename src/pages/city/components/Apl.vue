<template>
    <div class="cityapl">
        <ul class="list">
            <li @click="handLetterClick" class="item" v-for="(item, key) in cities" :key="key">{{key}}</li>
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
    },
    methods: {
        // 1点击的时候传递一个change事件
        handLetterClick (e) {
            // console.log(e.target.innerText);
            this.$emit('change', e.target.innerText)
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
