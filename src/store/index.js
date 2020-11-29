import { createStore } from 'vuex'

export default createStore({
  state() {
    return{

      msg:'VUEX DESDE CERO MANEJADO CON STORE',
      input:'',
      
    }
  },
  mutations: {
    chargeVar(state, inputFromHello){
      
      const replacements = {'A': 'U', 'E': 'O', 'O': 'E', 'U': 'A'};
      let newinput = inputFromHello.toUpperCase();
      state.input = newinput.replace(/A|E|O|U/g, char => replacements[char])
    
      
    }
  },
  actions: {
    chargeVarAction({commit}, inputFromHello){
      commit('chargeVar',inputFromHello)
    }
  },
  modules: {
  },
  getters:{

  }
})
