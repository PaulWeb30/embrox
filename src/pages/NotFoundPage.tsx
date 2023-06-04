import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
const NotFoundPage = () => {
	const navigate = useNavigate()
	const backFunc = () => {
		navigate(-1)
	}
	return (
		<>
			<Typography>NotFoundPage</Typography>
			<Button onClick={backFunc}>Return back</Button>
		</>
	)
}

export default NotFoundPage
