import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Show } from '../@types/show'

interface IProps {
	show: Show
}

const ShowItem: FC<IProps> = ({ show }) => {
	const { name, id } = show

	// if image property from API is null i just show image placeholder
	const imageLink =
		show?.image?.['medium'] ||
		show?.image?.['original'] ||
		'https://via.placeholder.com/400x200'

	const rating = show?.rating?.['average'] || 'none'
	return (
		<Grid item xs={12} md={4}>
			<Card
				sx={{
					height: '100%',
				}}
			>
				<Link to={`/show/${id}`}>
					<CardMedia
						image={imageLink}
						component='img'
						alt={name}
						title={name}
						sx={{ height: 140 }}
					/>
				</Link>
				<CardContent>
					<Typography variant='h6' component='h3'>
						{name}
					</Typography>
					<Typography variant='body1'>Rating: {rating}</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default ShowItem
