<template>
    <div>
        <div class="citysearch border-top">
        <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <city-list :cities="cities" :hotCities="hotCities" :letaaa="letaaa"></city-list>
        <city-apl :cities="cities" @change="handChange"></city-apl>
        <!-- 收索隐藏层 -->
        <div class="search-content" ref="wrapper" v-show="keyword">
            <ul>
                <li @click="handcity(item.name)" class="search-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="haslist">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
import Bscroll from 'better-scroll'
import axios from 'axios'
import CityList from './List.vue'
import CityApl from './Apl.vue'
export default {
    data () {
        return {
            cities:{},
            hotCities:[],
            // 定义，然后传递给子组件list.vue
            letaaa: '',
            keyword:'',
            list: [],
            timer: null
        }
    },
    watch: {
        // 监听keyword得变化,收索功能
        keyword () {
            // 加setTimeout节流，优化性能
            if (this.timer) {
                clearTimeout(this.timer)
            }
            // 如果输入框为空，则清空列表
            if (!this.keyword) {
                this.list = [];
                return
            }
            this.timer = setTimeout(() => {
                // 定义空数组存放
                const result = [];
                // 循环this.cities对象
                for (let i in this.cities) {
                    // 遍历this.cities[i]中得值
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            },100)
        }
    },
    components:{
        CityList,
        CityApl
    },
    mounted () {
        // 收缩出来得结果，让他可以自由滚动
        this.scroll = new Bscroll(this.$refs.wrapper)
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
            
        },
        handcity (city) {
            //  console.log(city);
            //  alert(city)
            this.$store.dispatch('changecity',city);
            this.$router.push('/')
            // this.keyword = []
        }
    },
    mounted () {
        this.getCityInfo()
    },
    computed: {
        haslist () {
            return !this.list.length
        }
    }
}
</script>
<style lang="stylus" scoped>
.search-content
  position absolute
  z-index 1
  right 0
  left 0
  bottom 0
  background #ffffff
  top 2.2rem
  overflow hidden
  .search-item
    color #666666
    background #ffffff
    height 0.62rem
    line-height 0.62rem
    padding-left .2rem
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
