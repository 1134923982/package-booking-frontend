const mutations = {
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
}

export default mutations
