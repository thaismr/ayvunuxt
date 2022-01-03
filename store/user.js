export const state = () => ({
  username: null,
  is_staff: null,
  is_superuser: null,
})

export const getters = {
  getAccountStatus: (s) => s.username,
}

export const actions = {
  fetchData({ commit }) {
    this.$apiCall
      .get('/api/user-data/')
      .then((resp) => {
        commit('setAccount', resp.data)
      })
      .catch((err) => {})
  },
}

export const mutations = {
  setAccount: (state, payload) => {
    state.username = payload.username
  },
}
