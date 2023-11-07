'use client'
import { POST_NEW_ORDER } from '@/gql/postNewOrder'
import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const OrderForm = () => {
	const [order, setOrder] = useState({
		persons: 2,
		start: '',
		end: '',
		finalPrice: 0,
		airport: '',
		food: '',
	})
	console.log(order)
	const handleChange = e => {
		setOrder({
			...order,
			finalPrice: order.persons * 2000,
			[e.target.name]: e.target.name === 'persons' ? Number(e.target.value) : e.target.value,
		})
	}
	const handlePlaceOrder = async () => {

		const url = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmoi6toe2jhp01uj4tzy1kqs/master'
		// TODO ukryć klucz (nie chce działać .env)
		const token =
			'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTUwMjE0ODAsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xtb2k2dG9lMmpocDAxdWo0dHp5MWtxcy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiM2JlZmY5N2EtOWIwZC00YTNhLTk5NjEtZWZmYTcyZTBmOWFmIiwianRpIjoiY2xtb2swd3ViMmcxNjAxdDc4cWU4YzBmdiJ9.v7ufahLl26GJLCnFFZoPkM2K1cdHmSp-CfnTj37bAmP1djiF3HEOInyyRd3clswoN9G_Nt9i31Hq29BP9lNWyLE81NoHwtxgttng8GbGxmZXRAYb9tKU9AD2uVVa_THXupLAl4__No5RqjHiLQxB90i50Sugu0zO73-POpiue9D24PlA1V4jncTB7FWqpZQ-x2QXvjmrcYOzI-kAnKiljewXWAEd5_W-XrhlYnrm8_iExS8WrpS93B41vm_Acg8oGtro3gQMpr3KzegOO8_9dCED60MlyEgZk4yDs20KYIbs0Kntw7-Ose0uxlEGhd3SID8lG4wIDwHPqGW_8mOLmN-jL1PpvF4Lk8oW0iEBOwovEOlaR1HCYwoNqYTPloHfsmVA0YbhIFgc_f18KrP9W0NyAdIawEy87E8L3dmJu_auIDIcDK1p37YvyNvKKEFOUwLZyuYx1HJ2_Xz0BNGB51IReDYfiwyWV5SAZxhSc9cebsAQt2jRLWq7zJsUySv0bgssrdwJ2SIhMgf6QFtdqnKG6rUe86eGxI8eYGI2Dg5Jx4YNXBLVIEcpjBWodGnK6JfV6IBdIUn2p35dZhEEjQuo6jKBWKJTq13338rsrw18pAvx1PNVWzz199Zx9lPmtZnD9a66x_ObBipwL6VahpGGlG51KEKoM587k7e_8kY'
		if (order.persons < 1 || !order.start || !order.end || !order.airport || !order.food) {
			console.log('nie podano danych')
			toast.error("Nie podano danych!")
			return
		}

		try {
			const response = await axios.post(
				url,
				{
					query: POST_NEW_ORDER,
					variables: order,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
				
			)
			toast("Zarezerwowano!")

			
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			
			<form>
				<input
					onChange={handleChange}
					value={order.persons}
					type='number'
					name='persons'
					placeholder='Wybierz liczbę osób'
				/>
				<br />
				<label htmlFor=''>Wybierz datę wyjazdu</label>
				<input onChange={handleChange} value={order.start} type='date' name='start' />
				<br />
				<label htmlFor=''>Wybierz datę powrotu</label>
				<input onChange={handleChange} value={order.end} type='date' name='end' />
				<br />
				<select onChange={handleChange} name='airport'>
					<option value='warszawa'>Warszawa</option>
					<option value='krakow'>Kraków</option>
					<option value='katowice'>Katowice</option>
					<option value='wroclaw'>Wrocław</option>
					<option value='rzeszow'>Rzeszów</option>
				</select>
				<br />
				<select onChange={handleChange} name='food'>
					<option value=''>Wybierz wyżywienie</option>
					<option value='All_inclusive'>All Inclusive</option>
					<option value='breakfast'>Śniadania</option>
					<option value='dinner'>Śniadania i obiadokolacje</option>
				</select>
			</form>
			<button onClick={handlePlaceOrder}>Rezerwuj</button>
			<ToastContainer/>
		</div>
	)
}

export default OrderForm
