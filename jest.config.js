module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js",
  },
  moduleFileExtensions: ["js", "vue", "json"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
    ".\\.(gql|graphql)$": "jest-transform-graphql",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/**/*.vue",
  ],
}
