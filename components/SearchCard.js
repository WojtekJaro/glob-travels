'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

export default function SearchCard({ offer }) {
	console.log(offer)
	return (
		<div>
			<Link key={offer.id} href={`/oferta/${offer.slug}`}>
				<Card className='mt-6 w-96'>
					<CardHeader color='blue-gray' className='relative h-56'>
						<img src={offer.images[0].url} alt={offer.title} />
					</CardHeader>
					<CardBody>
						<Typography variant='h5' color='blue-gray' className='mb-2'>
							{offer.title}
						</Typography>
						<Typography>{offer.id}</Typography>
					</CardBody>
					<CardFooter className='pt-0'>
						<Button>Read More</Button>
					</CardFooter>
				</Card>
			</Link>
		</div>
	)
}
