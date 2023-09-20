'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react'
import { HomeModernIcon, PaperAirplaneIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { RoomDrawer } from './RoomDrawer'

const PopularRooms = ({ rooms }) => {
	const [isOpen, setIsOpen] = React.useState(false)
    const handleDetails = (room) => {
        setCurrentRoom(room)
        setIsOpen(true)
        
    }
    console.log(handleDetails)
    const [currentRoom, setCurrentRoom] = React.useState(null)

	return (
		<div className="mt-5">
			{rooms.slice(0, 2).map(room => (
				<Card onClick={()=>handleDetails(room)} key={room.id} className='mb-4 w-full max-w-[48rem] flex-row border-solid border rounded-lg'>
					<CardHeader shadow={false} floated={false} className='m-0 w-2/5 shrink-0 rounded-r-none'>
						<img src={room.image.url} alt={room.title} className='h-full w-full object-cover ltr rounded-s-lg' />
					</CardHeader>
					<CardBody className='p-2'>
						<Typography variant='h5' color='gray' className='mb-1 uppercase'>
							{room.title}
						</Typography>
						<Typography variant='h4' color='blue-gray' className='mb-1'>
							<div className='flex gap-2'>
								<UserGroupIcon width={20} />
								<div>
									<span className='text-xs font bold'>Max: </span>

									<span className='text-xs'>{room.max} osoby.</span>
								</div>
							</div>
						</Typography>
						<Typography color='gray' className='mb-8 font-normal'>
							<div className='flex gap-2'>
								<div>
									<HomeModernIcon width={20} />
								</div>
								<div>
									<span className='text-xs font-bold'>Pomieszczenie: </span>

									<span className='text-xs'>{room.accomodation} osoby.</span>
								</div>
							</div>
						</Typography>
						<a href='#' className='inline-block'>
							<Button variant='text' className='flex items-center gap-2'>
								Wybierz
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
									className='h-4 w-4'>
									<path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
								</svg>
							</Button>
						</a>
					</CardBody>
				</Card>
			))}
			
			<RoomDrawer room={currentRoom} isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}

export default PopularRooms
