<template>
    <div class="city">
        <city-header></city-header>
        <city-tabnav></city-tabnav>
    </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CityTabnav from './components/Tabnav.vue'
export default {
    name: 'city',
    data () {
        return {

        }
    },
    components:{
        CityHeader,
        CityTabnav
    }
}
</script>
<style lang="stylus" scoped>

</style>
