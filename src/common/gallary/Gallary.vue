<template>
    <div class="gallary" @click="handoverclick">
        <div class="content">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="item in imgs" :key="item">
                <img class="swiper-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name: 'gallary',
    props: {
        imgs: {
            type:Array
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                // 监听DOM是否发生变化，变化了就自动刷新一次
                observer: true,
                observeParents: true
            }
        }
    },
    methods: {
        handoverclick () {
            this.$emit('close')
        }
    }
}
</script>
<style lang="stylus" scoped>
.gallary >>> .swiper-container
  overflow inherit 
.gallary
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed 
  top 0
  left 0
  right 0
  bottom 0
  background #000
  .content
    color #fff
    height 0
    width 100%
    padding-bottom 70%
    .swiper-pagination
      position absolute
      bottom -2rem
    .swiper-img
      width 100%
     
</style>
