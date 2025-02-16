import Carousel from '@/components/Carousel'
import SearchForm from '@/components/SearchForm'
import TravelImages from '@/components/TravelImages'
import { GET_ALL_TRAVELS } from '@/gql/getAllTravels'
import { cmsConnect } from '@/utils/cmsConnector'
import Image from 'next/image'
import Link from 'next/link'

export async function getData() {
	const data = await cmsConnect(GET_ALL_TRAVELS)
	return data
}
export default async function Home() {
	const { offers } = await getData()
	console.log(offers)
	const response = fetch(`http://api.nbp.pl/api/exchangerates/tables/1/
	`)

	return (
		<main className='relative flex min-h-screen flex-col items-center justify-center py-20'>
		
				<SearchForm />
			
				<Carousel offers={offers}></Carousel>
				
			
		</main>
	)
}

// query Offer {
//   offer(where:{id:"clmoj9yhnsyrs0aw6ffgn3ssf"}) {
//     amenities
//     createdAt
//     id
//     images {
//       url
//     }
//     location {
//       latitude
//       longitude
//     }
//     title
//     stars
//     description {
//       html
//     }
//   }
// }
