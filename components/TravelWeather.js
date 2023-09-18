'use client'
import React, { useEffect, useState } from 'react'

const TravelWeather = ({location}) => {
	const [weather, setWeather] = useState()
	useEffect(() => {
    getWeather()
  }, [])

	const getWeather = async () => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=b8f337afbc9706d3f8db77374b959a7d&lang=pl`
		)
		const data = await response.json()
		setWeather(data)
	}
  console.log(weather)

	return (
		<div>
			<h3 className='custom-title mb-6 text-3xl font-bold'>{weather?.name} - pogoda</h3>
			<div className='grid grid-cols-3 gap-6'>
				<div className='col-span-1 border-2 border-black-800 p-5 rounded-lg'>
        <span className='text-2xl capitalize'>{weather?.weather[0]?.description}</span>
					
					<img src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`} alt="" />
					<div>
						<span className="font-bold text-2xl">{(weather?.main?.temp - 272.15).toFixed()} ℃</span>
						<br />
						<span>Średnia temperatura</span>
					</div>
				</div>

				<div className='col-span-2 rounded-lg py-10 bg-gradient-to-r from-amber-500 to-yellow-500'>
					<div class=''></div>
				</div>
			</div>
		</div>
	)
}

export default TravelWeather
