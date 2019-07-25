import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8088'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: []
  },
  mutations: {
    getAllPackageInformation: function (state, packages) {
      state.packages.length = 0
      state.packages.push(...packages)
    },
    getPackagesByName: function (state, packages) {
      state.packages.length = 0
      state.packages.push(...packages)
    },
    updatePackage: function (state, item) {
      const index = state.packages.map(i => i.id).indexOf(item.id)
      state.packages[index] = item;
    },
    addPackage: function (state, item) {
      state.packages.push(item)
    }
  },
  actions: {
    getAllPackageInformation: function ({commit}) {
      axios.get('/package-informations').then(function (reponse) {
        commit("getAllPackageInformation", reponse.data)
      })
    },
    getPackagesByName: function ({commit}, state) {
      axios.get('/package-informations/' + state).then(
        function (reponse) {
          commit('getPackagesByName', reponse.data)
        }
      )
    },
    updatePackage: function ({commit}, item) {
      axios.put('/package-informations/' + item.id, item).then(function (reponse) {
        commit('updatePackage', reponse.data)
      })
    },
    addPackage: function ({commit}, item) {
      axios.post('/package-informations', item).then(function (reponse) {
          commit('addPackage',reponse.data)
        }
      )
    }
  }
})
