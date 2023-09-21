import { gql } from 'graphql-request'

export const GET_SEARCH_RESULTS = gql`
	query SearchQuery($query: String!) {
		offers(where: { _search: $query }) {
			id
			title
			slug
			images {
				url
			}
		}
	}
`
