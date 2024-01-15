'use client'
import { Input } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { FormControl, FormHelperText, InputLabel } from '@mui/material'
export default function SearchForm() {
	const [query, setQuery] = useState('')
	const router = useRouter()
	const handleSubmit = e => {
		if (query.length < 3) {
			alert('Nazwa jest za krótka')
			return
		}
		e.preventDefault()
		router.push(`/wyniki/${query}`)
	}
	return (
		<div >
			<div className="flex flex-row justify-center "> 
				<form onSubmit={handleSubmit} >
					<input onChange={(e)=>setQuery(e.target.value)} name='query' type='text' placeholder='Wpisz nick' className='h-150'/>
					<button type='submit'>Szukaj</button>
				</form>
			</div> 
		</div>
	)
}
