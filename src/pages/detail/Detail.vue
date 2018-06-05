<template>
    <div class="detail">
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
    </div>
</template>
<script>
import detailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
    name:'detail',
    data () {
        return {
            list: [],
            sightName: '',
            bannerImg:'',
            gallaryImgs:[]
        }
    },
    components: {
        detailBanner,
        DetailHeader,
        DetailList
    },
    methods: {
        getdetailinfo () {
            axios.get('/api/detail.json?id=' + this.$route.params.id)
              .then((res) => {
                  res = res.data;
                  if(res.ret && res.data){
                      this.sightName = res.data.sightName
                      this.bannerImg = res.data.bannerImg
                      this.gallaryImgs = res.data.gallaryImgs
                      this.list = res.data.categoryList
                  }
              })
        }
    },
    mounted () {
        this.getdetailinfo()
    },
}
</script>
<style lang="stylus" scoped>

</style>
