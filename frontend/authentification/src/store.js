import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        token: null
  
    },
  
    mutations: {

        TOKEN_MUTATION(state, thetoken){
            state.token = thetoken
        },

        DELETE_MUTATION(state){
            state.token = null
        }
  
     
    },
  
    actions: {

        SENDTOKEN(context, thetoken) {
            context.commit('TOKEN_MUTATION', thetoken)
        },

        DELETE_TOKEN(context){
            context.commit('DELETE_MUTATION')
        }
  
      
  
    },
  

  })