'use client'
import { imageLoader } from '@/utils/imageLoader'
import Image from 'next/image'
import React, { useState } from 'react'
import ImageModal from './ImageModal'

const TravelImages = ({ images }) => {
	const [isVisible, setIsVisible] = useState(false)
	const [current, setCurrent] = useState(images[0].url)
	const handleZoom = e => {
		setIsVisible(true)
		setCurrent(e.target.src)
	}

	return (
		<div>
			<div className='grid grid-cols-2 gap-6'>
				<Image
					onClick={images[0] ? handleZoom :null}
					className='col-span-2 rounded-lg'
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: '100%', height: 'auto' }}
					loader={images[0]?.url ? imageLoader : null}
					src={images[0]?.url ? images[0].url : '/placeholder.png'}
					alt=''
				/>
				<Image
					onClick={images[1] ? handleZoom :null}
					className=' rounded-lg'
					width={0}
					height={0}
					sizes='200px'
					style={{ width: '100%', height: 'auto' }}
					loader={images[1]?.url ? imageLoader : null}
					src={images[1]?.url ? images[1].url : '/placeholder.png'}
					alt=''
				/>
				<Image
					onClick={images[2] ? handleZoom :null}
					className=' rounded-lg'
					paddint='10px'
					width={0}
					height={0}
					sizes='200px'
					style={{ width: '100%', height: 'auto' }}
					loader={images[2]?.url ? imageLoader : null}
					src={images[2]?.url ? images[2].url : '/placeholder.png'}
					alt=''
				/>
				<ImageModal current={current} isVisible={isVisible} onSetVisible={setIsVisible} />
			</div>
		</div>
	)
}

export default TravelImages
