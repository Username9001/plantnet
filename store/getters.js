export default {
  getPlantByName: (state) => (name) => {
    return state.plants.find((plant) => plant.name === name)
  },
  getGuildById: (state) => (id) => {
    return state.guilds.find((guild) => guild.id === id)
  },
}
