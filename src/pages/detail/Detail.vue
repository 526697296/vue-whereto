<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
    </div>
</template>
<script>
import detailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'

export default {
    name:'detail',
    data () {
        return {

        }
    },
    components: {
        detailBanner,
        DetailHeader
    }
}
</script>
<style lang="stylus" scoped>

</style>
