import NavBar from '@/components/NavBar'
import './globals.scss'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Wakacje i wczasy ',
	description: 'Zarezerwuj wymarzone wakacje! ',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body className={inter.className} >
				
					<NavBar />
					{children}
					<Footer/>

			</body>
		</html>
	)
}
