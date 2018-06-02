<template>
    <div class="citylist" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-float">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div @click="handcity(item1.name)" class="button-float" v-for="item1 in hotCities" :key="item1.id">
                    <div class="button">{{item1.name}}</div>
                </div>
            </div>
        </div>
        <!-- cities是一个对象，所以这里要二次循环 -->
        <!-- :ref="key"动态 -->
        <div class="area" v-for="(item2,key) in cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" v-for="item3 in item2" :key="item3.id">
                <div @click="handcity(item3.name)" class="item border-bottom">{{item3.name}}</div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
// 引入better-scroll
import Bscroll from 'better-scroll'
export default {
    props:{
        cities: {
            type:Object
        },
        hotCities: {
            type:Array
        },
        letaaa: {
            type:String
        }
    },
    name: 'citylist',
    watch: {
        // 监听APL.vue里面的数据变化
        // 当点击apl.vue中的字母，则list.vue列表中，显示对应的信息
        letaaa () {
            if(this.letaaa) {
                // this.letaaa获取的是一个数组
                const element = this.$refs[this.letaaa][0]
                // console.log(element)
                // scroll.scrollToElement ==>better-scroll中的方法
                this.scroll.scrollToElement(element)
                
            }
        }
    },
    data () {
        return {

        }
    },
    components:{
    },
    // 当页面加载的时候执行
    mounted () {
        // 实例化better-scroll
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    methods: {
        handcity (city) {
            //  console.log(city);
            //  alert(city)
            this.$store.dispatch('changecity',city);
            this.$router.push('/')
        }
    }
}
</script>
<style lang="stylus" scoped>
.citylist
  color #000
  overflow hidden
  position absolute
  top 2.2rem
  left 0
  right 0
  bottom 0
  .item-list
    .item
      height .76rem
      line-height 0.76rem
      padding-left .2rem
  .title
    padding .24rem .3rem
    background #eeeeee
    height 0.2rem
    line-height 0.2rem
    font-size 0.24rem
  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button-float
      width 33.33%
      float left
      .button
        border .02rem solid #ccc
        margin .1rem
        padding .1rem
        border-radius .08rem
        text-align center
        color:#000
  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
</style>
