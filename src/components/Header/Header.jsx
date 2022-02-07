import React from 'react';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import { Autocomplete } from '@react-google-maps/api';
import useStyles from './style';

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='static'>
			<Toolbar className={classes.toolbar}>
				<Typography variant='h5' className={classes.title}>
					Travel Advisor
				</Typography>
				<Box className={classes.searchBox}>
					<Typography variant='h6' className={classes.titleSearch}>
						Trouver une ville
					</Typography>
					{/* <Autocomplete> */}
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							sx={{ color: 'inherit' }}
							className={classes.inputInput}
							placeholder='Search...'
						/>
					</div>
					{/* </Autocomplete> */}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
