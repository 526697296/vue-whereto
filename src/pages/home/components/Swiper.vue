<template>
  <div class="homeswiper">
      <swiper :options="swiperOption" v-if="swiperlist.length">
        <!-- slides -->
        <swiper-slide v-for="item in swiperlist" :key="item.id">
           <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props:{
    swiperlist:{
      type:Array
    }
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination:'.swiper-pagination',
        loop:true,
        autoplay:1500
      }
    }
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
  padding-bottom 31.2%
  background #ccc
  .swiper-img
    width: 100%;
</style>
