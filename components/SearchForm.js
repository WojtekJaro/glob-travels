"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function SearchForm() {
const [query, setQuery] = useState("")
const router = useRouter()
const handleSubmit = (e) => {
    if(query.length <3) {
        console.log("Nazwa jest za krótka")
        return
    }
    e.preventDefault()
    router.push(`/wyniki/${query}`)

}
	return (
		<div>
			<div>
				<form onSubmit={handleSubmit}>
					<input onChange={(e)=>setQuery(e.target.value)} name='query' type='text' placeholder='Wyszukaj ofertę' />
					<button type='submit'>Szukaj</button>
				</form>
			</div>
		</div>
	)
}
