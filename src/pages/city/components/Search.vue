<template>
    <div>
        <div class="citysearch border-top">
        <input type="text" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <city-list :cities="cities" :hotCities="hotCities" :letaaa="letaaa"></city-list>
        <city-apl :cities="cities" @change="handChange"></city-apl>
    </div>

</template>
<script>
import axios from 'axios'
import CityList from './List.vue'
import CityApl from './Apl.vue'
export default {
    data () {
        return {
            cities:{},
            hotCities:[],
            // 定义，然后传递给子组件list.vue
            letaaa: ''
        }
    },
    components:{
        CityList,
        CityApl
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
              .then(this.handgetCitySuccess)
        },
        handgetCitySuccess (res) {
            // console.log(res)
            res = res.data;
            if(res.ret && res.data){
                this.cities = res.data.cities;
                this.hotCities = res.data.hotCities
            }
            
        },
        // 接受APL.vue子组件传递过来的数据
        handChange (letaaa) {
            // console.log(letaaa)
            this.letaaa = letaaa
            
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
<style lang="stylus" scoped>
.citysearch
  background #eeeeee
  height 0.72rem
  line-height 0.72rem
  width 100%
  .search-input
    width 100%
    padding 0 .1rem
    box-sizing border-box
    height 0.56rem
    line-height 0.56rem
    text-align center
    color #cccccc
    border-radius .1rem
</style>
