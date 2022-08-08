// module.exports = {
//   client: {
//     service: {
//       name: "vuex-cart",
//       url: "http://143.176.135.108:8000/graphql/",
//       skipSSLValidation: true,
//     },
//   },
// }

export default (context) => {
  return {
    httpEndpoint: 'http://143.176.135.108:8000/graphql/'
  }
}