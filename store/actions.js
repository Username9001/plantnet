import fetchPlants from "~/apollo/queries/plants/fetchPlants.gql"
import fetchGuilds from "~/apollo/queries/guilds/fetchGuilds.gql"

export default {
  async fetchPlants({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: fetchPlants,
      variables: { page: this.state.plantsPage },
    })
    await commit("updatePlants", response.data.plants)
  },
  async fetchGuilds({ commit }) {
  console.log("before guilds")
  let response = await this.app.apolloProvider.defaultClient.query({
    query: fetchGuilds,
  })
  await commit("updateGuilds", response.data.guilds)
  console.log("after guilds")
  },
}
