<template>
  <div class="homeswiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in swiperlist" :key="item.id">
           <img class="swiper-img" :src="item.url" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination:'.swiper-pagination',
        loop:true,
        autoplay:1500
      },
      swiperlist:[
          {
              id:'001',
              url:'http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg'
          },
          {
              id:'002',
              url:'http://img1.qunarzz.com/piao/fusion/1804/3e/4d6e12949f74fc02.jpg_750x200_22aba1bb.jpg'
          }
      ]
    };
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
// 这4个属性设置,一种技巧，设置轮播图，不管怎么刷新，都有自己的高度
// 技巧：height设置成0，利用padding设置成width的比例 
.homeswiper >>> .swiper-pagination-bullet-active
  background red
.homeswiper 
  overflow hidden
  width 100%
  height 0
  padding-bottom 26.7%
  background #ccc
  .swiper-img
    width: 100%;
</style>
