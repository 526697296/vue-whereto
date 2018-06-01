<template>
    <div class="cityapl">
        <ul class="list">
            <li :ref="item" @click="handLetterClick" @touchstart="handTouchStart" @touchmove="handTouchmove" @touchend="handTouchend" class="item" v-for="item in letters" :key="item">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        cities: {
            type:Object
        }
    },
    computed:{
        letters () {
            const letters = [];
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    name:'cityapl',
    data () {
        return {
            touchstarts: false,
            timer:null
        }
    },
    methods: {
        // 1点击的时候传递一个change事件
        handLetterClick (e) {
            // console.log(e.target.innerText);
            this.$emit('change', e.target.innerText)
        },
        handTouchStart () {
            this.touchstarts = true
        },
        handTouchmove (e) {
            if(this.touchstarts) {
                // 节流
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    const startY = this.$refs['A'][0].offsetTop;
                    const touchY = e.touches[0].clientY - 110;
                    const index = Math.floor((touchY - startY) / 20);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                },16)
                
            }
        },
        handTouchend () {
            this.touchstarts = false
        }
    }
}
</script>
<style lang="stylus" scoped>
.list
  color #00bcd4
  position absolute
  right 0 
  bottom 0
  width .4rem
  text-align center
  display flex
  flex-direction column
  justify-content center
  top 2.2rem
  .item 
    height 0.4rem
    // color 
</style>
