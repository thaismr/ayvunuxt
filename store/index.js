export const actions = {
  async nuxtServerInit({ commit }) {
    let response = null
    response = await this.$apiCall.get('/api/user-data/').catch((err) => {
      console.log(err)
    })

    if (response) {
      const data = response.data
      //   console.log(response.headers['set-cookie'])
      commit('user/setAccount', data)
      commit('auth/authSuccess', 'success')
    }
  },
}
