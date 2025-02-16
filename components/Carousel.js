'use client'
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip, Button } from '@material-tailwind/react'
import React from 'react'
import TravelImages from './TravelImages'
import Image from 'next/image'
import Link from 'next/link'

export default function Carousel(offers) {
	const ofert = offers.offers
	console.log(ofert)
	const promo = ofert.forEach(element => console.log(element.promotion))

	return (
		<div>
			<h1 className='text-left px-5 text-2xl font-bold custom-title'>Biuro podróży</h1>
			<div
				className='bg-amber-400 ml-5 mt-1 h-1 w-40 rounded-xl'></div>
			<div className='flex flex-row justify-center '>
				{ofert.map(ofert => (
					<Link className='p-5 ' key={ofert.id} href={`oferta/${ofert.slug}`}>
						<Card className='mt-6 w-96 h-96 border-2 '>
							<CardHeader color='blue-gray' className='relative h-56'>
								{ofert.promotion ? (
									<Typography className='absolute p-2 m-2 bg-amber-400 text-black text-gray-800 rounded-xl font-medium'>
										PROMOCJA
									</Typography>
								) : null}

								<img src={ofert.images[0].url} alt={ofert.title} />
							</CardHeader>
							<CardBody>
								<Typography variant='h4' color='blue-gray' className='mb-2 p-2'>
									{ofert.title}
								</Typography>
							</CardBody>
							<CardFooter className='p-2'>
								<Button>Sprawdź ofertę!</Button>
							</CardFooter>
						</Card>
					</Link>
				))}
			</div>
		</div>
	)
}
