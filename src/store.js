import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        user:null,
        token:null
    },

    mutations:{
        SET_TOKEN(state, payload){
            state.token = payload
        },
        SET_USER(state, payload){
            state.user = payload
        }
    },

    getters:{
        authenticated(state){
            return state.token && state.user
        },
        user(state){
            return state.user 
        }
    },

    actions:{
        async signIn({commit, dispatch}, payload){
            let response = await axios.post('auth/login', payload)
            commit('SET_USER', JSON.parse(response.config.data))
            return dispatch('attempt', response.data.access_token)
        },
         
        attempt({commit}, token){
           commit('SET_TOKEN', token)
        }
    }
})

export default store