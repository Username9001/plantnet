import gql from "graphql-tag"
import { useQuery } from "@vue/apollo-composable"

const ALL_PLANTS_QUERY = gql`
  {
    plants {
      id
      common_english
      latin_name
    }
  }
`

export default function () {
  //const val = ref("");
  //const plants = reactive({ list: [] });

  //const submitted = async () => {
  //	const {response, error, fetching, fetchData} = useFetch(
  //		``
  //	)
  //}

  const { result, loading, error } = useQuery(ALL_PLANTS_QUERY)

  return {
    result,
    loading,
    error,
  }
}
