import { HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'
import React from 'react'

export function RoomDrawer({ room, isOpen, setIsOpen }) {
	return (
		<main
			className={
				' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
				(isOpen
					? ' transition-opacity opacity-100 duration-500 translate-x-0  '
					: ' transition-all delay-500 opacity-0 translate-x-full  ')
			}>
			<section
				className={
					' w-screen max-w-sm right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
					(isOpen ? ' translate-x-0 ' : ' translate-x-full ')
				}>
				<article className='relative max-w-lg pb-10 flex flex-col space-y-6 h-full'>
					<header className='p-4 font-bold text-lg'>{room?.title}</header>
					<img src={room?.image.url} alt={room?.title} className='w-full object-cover !m-0' />
					<div className='m-5'>
						<div className='flex gap-2'>
							<UserGroupIcon width={20} />
							<div>
								<span className='text-xs font bold'>Max: </span>

								<span className='text-xs'>{room?.max} osoby.</span>
							</div>
						</div>

						<div className='flex gap-2'>
							<div>
								<HomeModernIcon width={20} />
							</div>
							<div>
								<span className='text-xs font-bold'>Pomieszczenie: </span>

								<span className='text-xs'>{room?.accomodation} osoby.</span>
							</div>
						</div>
						<span className='block text-center mb-3 text-blue-500 font-bold text-lg'>
							{room?.extraFee === 0 ? 'bez dopłaty' : `+${room?.extraFee} zł/pokój`}{' '}
						</span>
						<hr></hr>
						<div>
							<span className='text-xs font-bold'>Łazienka: </span>
							<span className='text-xs'>{room?.bathroom}</span>
						</div>
						<div>
							<span className='text-xs font-bold'>Widok: </span>
							<span className='text-xs'>{room?.view}</span>
						</div>
						<div>
							<span className='text-xs font-bold'>Wyposażenie: </span>
							<span className='text-xs'>{room?.equipment}</span>
						</div>
					</div>
				</article>
			</section>
			<section
				className=' w-screen h-full cursor-pointer '
				onClick={() => {
					setIsOpen(false)
				}}></section>
		</main>
	)
}
