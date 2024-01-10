'use client'
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip, Button } from '@material-tailwind/react'
import React from 'react'
import TravelImages from './TravelImages'
import Image from 'next/image'
import Link from 'next/link'

export default function Carousel(offers) {
	const oferta = offers.offers
	console.log(oferta)
	return (
		<div>
			
				{oferta.map(oferta => (
          <Link key={oferta.id} href={`oferta/${oferta.slug}`}>
					<Card className='mt-6 w-96'>
						<CardHeader color='blue-gray' className='relative h-56'>
							<img src={oferta.images[0].url} alt={oferta.title} />
						</CardHeader>
						<CardBody>
							<Typography variant='h5' color='blue-gray' className='mb-2'>
								{oferta.title}
							</Typography>
						</CardBody>
						<CardFooter className='pt-0'>
							<Button>Sprawdź ofertę!</Button>
						</CardFooter>
					</Card>
          </Link>
				))}
			
			<div>
				<h1></h1>
			</div>
		</div>
	)
}
