export default {
  data() {
    return {
      methods: ["image", "specs"],
      searchMethod: null,
    }
  },
  methods: {
    selectMethod(selectedMethod) {
      this.searchMethod = selectedMethod
      console.log("method:", this.searchMethod)
      this.$emit("selected", this.searchMethod)
    },
  },
}
