import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultcity = '北京'
try {
    if (localStorage.city) {
        defaultcity = localStorage.city
    }
}catch(e){}

export default new Vuex.Store({
    state: {
        // 默认的是北京
        city: defaultcity
    },
    actions: {
        // ctx可以调用commit方法
        changecity (ctx,city) {
            // console.log(city)
            ctx.commit('changecity',city)
        }
    },
    mutations: {
        changecity (state,city) {
            state.city = city;
            // localStorage.city = city
            try {
                localStorage.city = city
            } catch (e) {
                
            }
        }
    }
})