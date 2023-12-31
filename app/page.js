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

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div>
				<SearchForm />
			</div>
			
			{offers.map(offer => (
				<Link key={offers.id} href={`/oferta/${offer.slug}`}>
					
					<Image src={offer.images[0].url} width={500} height={500} alt='Picture of the author' />
					{offer.title}{' '}
				</Link>
			))}
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
