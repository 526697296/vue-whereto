<template>
    <div class="homeicsons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(ppges,index) in pages" :key="index">
            <div class="icon" v-for="item in ppges" :key="item.id">
                <div class="icon-img">
                    <img class="icon-imgcontent" :src="item.url" alt="">
                </div>
                <p class="icon-desc">{{item.text}}</p>
            </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption:{},
      icons:[
          {
              id:'001',
              text:'电竞门票',
              url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
          },
          {
              id:'002',
              text:'游乐场',
              url:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'
          },
          {
              id:'003',
              text:'水上乐园',
              url:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'
          },
          {
              id:'004',
              text:'城市广告',
              url:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
          },
          {
              id:'005',
              text:'一日游',
              url:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
          },
          {
              id:'006',
              text:'动物乐园',
              url:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
          },
          {
              id:'007',
              text:'海冰海盗',
              url:'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png'
          },
          {
              id:'008',
              text:'东部华侨城',
              url:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
          },
          {
              id:'009',
              text:'东部华侨城',
              url:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
          }
      ]
    }
  },
  components:{
  },
  computed:{
      pages(){
          const pages = [];
          this.icons.forEach((item,index) => {
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
