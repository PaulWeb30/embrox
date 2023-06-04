import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import ShowApi from '../services/show'
import { Show } from '../@types/show'
import { Typography } from '@mui/material'
import SingleShow from '../components/SingleShow'
const ShowPage = () => {
	const { showId } = useParams()
	const {
		data: show,
		isLoading,
		isError,
	} = useQuery('show', () => ShowApi.getShow(showId), {
		keepPreviousData: true,
		refetchOnWindowFocus: false,
	})

	const renderShow = (showObj: Show | undefined) => {
		if (!showObj) {
			return <Typography>No data about show</Typography>
		}
		return <SingleShow show={showObj} />
	}

	if (isLoading) {
		return <Typography>Loading...</Typography>
	}

	if (isError) {
		return <Typography>Error happened</Typography>
	}

	return <div>{renderShow(show)}</div>
}

export default ShowPage
