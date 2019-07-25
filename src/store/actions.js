import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8088'


const actions = {
  getAllPackageInformation: function ({commit}) {
    axios.get('/package-informations').then(function (reponse) {
      commit("getAllPackageInformation", reponse.data)
    }).catch(function (error) {

    })
  },
  getPackagesByName: function ({commit}, state) {
    axios.get('/package-informations/' + state).then(
      function (reponse) {
        commit('getPackagesByName', reponse.data)
      }
    ).catch(function (error) {

    })
  },
  updatePackage: function ({commit}, item) {
    axios.put('/package-informations/' + item.id, item).then(function (reponse) {
      commit('updatePackage', reponse.data)
    }).catch(function (error) {

    })
  },
  addPackage: function ({commit}, item) {
    axios.post('/package-informations', item).then(function (reponse) {
        commit('addPackage',reponse.data)
      }
    ).catch(function (error) {

    })
  }
}
export default actions
