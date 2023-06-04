import React, { useEffect, useState } from 'react'
import { Root } from '../@types/show'
import { SearchInput, ShowItem } from '../components'
import { Grid, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import useDebounce from '../hooks/useDebounce'
import ShowApi from '../services/show'

const MainPage = () => {
	const {
		data: shows,
		isLoading,
		isError,
		refetch,
	} = useQuery('shows', () => ShowApi.searchShows(inputValue), {
		keepPreviousData: true,
		refetchOnWindowFocus: false,
	})

	const [inputValue, setInputValue] = useState<string>('')
	const debouncedValue = useDebounce(inputValue, 300)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	useEffect(() => {
		if (inputValue.length >= 2) {
			refetch()
		}
	}, [debouncedValue])

	const renderShows = (showsArr: Root[] | undefined) => {
		if (inputValue.length < 2) {
			return (
				<Typography>
					Type the show's name <br />
					At least 2 symbols
				</Typography>
			)
		}
		if (!showsArr?.length) {
			return <Typography>Sorry, nothing found with this search</Typography>
		}
		return shows?.map(e => {
			return <ShowItem key={e.show.id} show={e.show} />
		})
	}

	if (isLoading) {
		return <Typography>Loading...</Typography>
	}

	if (isError) {
		return <Typography>Error happened</Typography>
	}

	return (
		<>
			<SearchInput value={inputValue} onChange={handleInputChange} />
			<Grid container spacing={2}>
				{renderShows(shows)}
			</Grid>
		</>
	)
}

export default MainPage
