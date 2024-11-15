import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
    
  },
  getters: {
   
  },
  mutations: {
    setCharacters(state, payload ){
      state.characters = payload
    },

    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
    

  },
  actions: {
    async getCharacters({commit}){
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      }catch(error){
      console.error(error)
      }
    }, 
    filterByStatus({commit, state}, status) {
      const filter = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', filter)},
    filterByGender({commit, state}, gender) {
      const filter = state.characters.filter((character) => {
        return character.gender.includes(gender)
      })
      commit('setCharactersFilter', filter)},
    filterBySpecie({commit, state}, specie) {
      const filter = state.characters.filter((character) => {
        return character.specie.includes(specie)
      })
      commit('setCharactersFilter', filter)
    }
  },
  modules: {
  }
})
