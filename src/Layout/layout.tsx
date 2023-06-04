import React, { FC } from 'react'
import { Container } from '@mui/material'
const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Container
			sx={{
				mt: '1rem',
			}}
		>
			{children}
		</Container>
	)
}

export default Layout
