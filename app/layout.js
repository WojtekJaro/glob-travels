import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Wakacje i wczasy ',
	description: 'Zarezerwuj wymarzone wakacje! ',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NavBar />
				{children}
			</body>
		</html>
	)
}
