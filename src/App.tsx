import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage, NotFoundPage, ShowPage } from './pages'
function App() {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/show/:showId' element={<ShowPage />} />
			<Route path={'*'} element={<NotFoundPage />} />
		</Routes>
	)
}

export default App
