import { gql } from 'graphql-request'

export const GET_SINGLE_TRAVEL = gql`
	query Offer($slug: String) {
		offer(where: { slug: $slug }) {
			amenities
			createdAt
			short
			id
			images {
				url
			}
			location {
				latitude
				longitude
			}
			title
			stars
			description {
				html
			}
			rooms {
				accomodation
				bathroom
				equipment
				extraFee
				id
				image {
					url
				}
				max
				title
				view
			}
			promotion
		}
	}
`
