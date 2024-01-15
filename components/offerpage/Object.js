'use client'
import React from 'react'
import { RoomDrawer } from '../RoomDrawer'
import { Button, Card, Typography } from '@material-tailwind/react'
const Object = item => {
	const [isOpen, setIsOpen] = React.useState(false)
	console.log(item)
	return (
		<div>
			<div>
				<Button onClick={() => setIsOpen(true)} size="lg" className=' py-5 border-primary' variant='outlined'>
					Obiekt
				</Button>
			</div>
			<hr />
			<div>
				<Button onClick={() => setIsOpen(true)} size="lg" className=' py-5 border-primary' variant='outlined'>
					Wyżywienie
				</Button>
			</div>
			<hr />
			<div class='button' onClick={() => setIsOpen(true)} size="lg" className=' py-5 border-primary' variant='outlined'>
				<Typography variant="lead">Szczegóły lotu</Typography>
			</div>
			<hr />

			<RoomDrawer isWide isOpen={isOpen} setIsOpen={setIsOpen}>
				<p>{item.item.short}</p>
				<hr />
			</RoomDrawer>
		</div>
	)
}

export default Object
