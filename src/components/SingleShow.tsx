import React from 'react'
import { Card, Typography, CardMedia } from '@mui/material'
import { Show } from '../@types/show'

interface IProps {
	show: Show
}

const SingleShow: React.FC<IProps> = ({ show }) => {
	const { name, officialSite, genres, url, status, summary, schedule } = show

	// if image property from API is null, display image placeholder
	const imageLink =
		show?.image?.medium ||
		show?.image?.original ||
		'https://via.placeholder.com/400x200'

	const rating = show?.rating?.average || 'none'

	return (
		<Card sx={{ display: 'flex', marginBottom: '16px' }}>
			<CardMedia
				component='img'
				sx={{ width: '30%', height: '30vh', flexShrink: 0, objectFit: 'cover' }}
				image={imageLink}
				title={name}
			/>
			<div style={{ marginLeft: 20 }}>
				<Typography variant='h5' component='h2'>
					{name}
				</Typography>

				<Typography variant='body1' color='textSecondary'>
					Genres:
				</Typography>
				<Typography variant='body2'>{genres.join(',') || 'none'}</Typography>

				<Typography variant='body1' color='textSecondary'>
					Rating: {rating}
				</Typography>

				<a href={url || officialSite} target='_blank' rel='noopener noreferrer'>
					Open Link
				</a>
				
				<Typography variant='body1' color='textSecondary'>
					Status: {status || 'none'}
				</Typography>

				<div>
					Schedule:
					<Typography variant='body1'>Time: {schedule?.time}</Typography>
					<Typography variant='body1'>
						Days: {schedule?.days.join(', ')}
					</Typography>
				</div>

				<Typography variant='body1'>Summary:</Typography>
				<Typography
					variant='body1'
					color='textSecondary'
					dangerouslySetInnerHTML={{ __html: summary }}
				/>
			</div>
		</Card>
	)
}

export default SingleShow
