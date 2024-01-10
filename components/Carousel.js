'use client'
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip, Button } from '@material-tailwind/react'
import React from 'react'
import TravelImages from './TravelImages'
import Image from 'next/image'
import Link from 'next/link'

export default function Carousel(offers) {
	const ofert = offers.offers
	console.log(ofert)
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 '>
			<div>
				<div>
					{ofert.map(ofert => (
						<Link key={ofert.id} href={`oferta/${ofert.slug}`}>
							<Card className='mt-6 w-96'>
								<CardHeader color='blue-gray' className='relative h-56'>
									<img src={ofert.images[0].url} alt={ofert.title} />
								</CardHeader>
								<CardBody>
									<Typography variant='h5' color='blue-gray' className='mb-2'>
										{ofert.title}
									</Typography>
								</CardBody>
								<CardFooter className='pt-0'>
									<Button>Sprawdź ofertę!</Button>
								</CardFooter>
							</Card>
						</Link>
					))}
				</div>
				
			</div>
		</main>
	)
}
