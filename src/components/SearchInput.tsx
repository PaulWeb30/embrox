import React, { FC } from 'react'
import { TextField } from '@mui/material'

interface IProps {
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: FC<IProps> = ({ value, onChange }) => {
	return (
		<TextField
			label="Type the show's name"
			variant='standard'
			fullWidth
			type='search'
			placeholder="Type the show's name"
			value={value}
			onChange={onChange}
			sx={{
				mb: '1.5rem',
			}}
		/>
	)
}

export default SearchInput
