

import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'
import './assets/App.css'

export default function App() {
	return (
		<>
			<Navbar />
			<div>
				<Body />
			</div>
			<Footer />
		</>
	)
}
