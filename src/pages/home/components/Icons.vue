<template>
    <div class="homeicsons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(ppges,index) in pages" :key="index">
            <div class="icon" v-for="item in ppges" :key="item.id">
                <div class="icon-img">
                    <img class="icon-imgcontent" :src="item.imgUrl" alt="">
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
            
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  props:{
    iconlist:{
        type:Array
    }
  },
  data () {
    return {
      swiperOption:{}
    }
  },
  components:{
  },
  computed:{
      pages(){
          const pages = [];
          this.iconlist.forEach((item,index) => {
              const page = Math.floor(index/8)
              if(!pages[page]){
                  pages[page] = [];
              }
              pages[page].push(item)
          })
          return pages
      }
  }
}
</script>
<style lang="stylus" scoped>
  .homeicsons >>> .swiper-container
    overflow hidden
    height 0
    padding-bottom 50%
  .icon
    position relative
    overflow hidden
    height 0
    width 25% 
    padding-bottom 25% 
    float left
    .icon-desc
      position absolute
      font-size 0.2rem
      left 0
      right 0
      bottom 0
      height .44rem
      line-height 0.44rem
      text-align center
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .icon-img
      box-sizing border-box
      padding .1rem
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      //设置img的样式
      .icon-imgcontent
        height 100%
        display block
        margin 0 auto
</style>
