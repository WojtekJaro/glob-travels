'use client'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { imageLoader } from '@/utils/imageLoader'

export default function ImageModal({ isVisible, onSetVisible, current }) {
	const cancelButtonRef = useRef(null)

	return (
		<Transition.Root show={isVisible} as={Fragment}>
			<Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={() => onSetVisible(true)}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:w-3/5'>
								<Image
									className='rounded-lg'
									width={0}
									height={0}
									sizes='100vw'
									style={{ width: '100%', height: 'auto' }}
									loader={imageLoader}
									src={current}
									alt=''
								/>

								
									<button
										type='button'
										className=' absolute mt- top-5 right-5 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
										onClick={() => onSetVisible(false)}
										ref={cancelButtonRef}>
										Close
									</button>
								
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
