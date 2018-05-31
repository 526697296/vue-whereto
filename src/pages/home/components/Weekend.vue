<template>
    <div class="homeweekend">
        <div class="week-title">周末去哪儿</div>
        <div class="week-content" v-for="item in weeklist" :key="item.id">
            <div class="week-img">
                <img class="img"
                 :src="item.url" alt="">
            </div>
            <div class="week-info">
                <p class="p-week-title">{{item.title}}</p>
                <p class="p-week-desc">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'homeweekend',
    data () {
        return {
            weeklist:[{
                id:'001',
                url:'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
                title:'北京山花好地方',
                desc:'乱花渐欲迷人眼，北京珊瑚好地方'
            },
            {
                id:'002',
                url:'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
                title:'北京山花好地方',
                desc:'乱花渐欲迷人眼，北京珊瑚好地方'
            },
            {
                id:'003',
                url:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
                title:'北京山花好地方',
                desc:'乱花渐欲迷人眼，北京珊瑚好地方'
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
.week-title
  height 0.8rem
  line-height 0.8rem
  text-indent .2rem
  color #333
  background #eeeeee
.week-img
  overflow hidden
  height 0
  padding-bottom 37.43%
  .img
    width 100%
.week-info
  padding .14rem .2rem .2rem .2rem
  .p-week-title
    overflow hidden
    color #212121
    height 0.48rem
    line-height 0.48rem
    font-size 0.28rem
    text-overflow ellipsis
    white-space nowrap 
  .p-week-desc
    overflow hidden
    color #212121
    height 0.42rem
    line-height 0.42rem
    font-size 0.24rem
    text-overflow ellipsis
    white-space nowrap 
</style>
