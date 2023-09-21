import { GET_SEARCH_RESULTS } from '@/gql/getSearchResults'
import { cmsConnect } from '@/utils/cmsConnector'
import React from 'react'

import SearchCard from '@/components/SearchCard';

export async function getData(query) {
	const data = await cmsConnect(GET_SEARCH_RESULTS, { query: query})
	return data
}

export default async function ResultsPage({params}) {
	const {offers} = await getData(params.query)
    console.log(offers)
	return (
    <div>
        {params.query}
        <h2>Wyniki Wyszukiwania:</h2>
        {offers.map(offer => (<SearchCard offer={offer}/>))}
        </div>
    )
}



   
