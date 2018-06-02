<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperlist="swiperlist"></home-swiper>
    <home-icons :iconlist="iconlist"></home-icons>
    <home-recommend :recommendlist="recommendlist"></home-recommend>
    <home-weekend :weekendlist="weekendlist"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // city:'',
      swiperlist:[],
      iconlist:[],
      recommendlist:[],
      weekendlist:[],
      lastcity:''
    }
  },
  methods:{
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if(res.ret && res.data){
        // this.city = res.city; 
        this.swiperlist = res.data.swiperList;
        this.iconlist = res.data.iconList;
        this.recommendlist = res.data.recommendList;
        this.weekendlist = res.data.weekendList
      }
      console.log(res)
    }
  },
  mounted () {
    // 当页面挂载的时候
    this.lastcity = this.city
    this.getHomeInfo()
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  // keep-alive缓存之后多出一个方法
  activated () {
    // 当页面重新挂载的时候
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
