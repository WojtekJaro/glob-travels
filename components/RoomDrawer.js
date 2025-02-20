import { Typography } from '@material-tailwind/react'
import React from 'react'

export function RoomDrawer({ isWide, children, isOpen, setIsOpen }) {
	
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
					' w-screen right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
					(isOpen ? ' translate-x-0 ' : ' translate-x-full ') +
					(isWide ? 'max-w-xl' : 'max-w-sm')
				}>
				<article className='relative  pb-10 flex flex-col space-y-6 h-full'>{children}</article>
			</section>
			<section
				className=' w-screen h-full cursor-pointer '
				onClick={() => {
					setIsOpen(false)
				}}></section>
		</main>
	)
}
