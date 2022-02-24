import React, { useState } from 'react';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@react-google-maps/api';
import useStyles from './style';

const Header = ({setCoords}) => {
	const classes = useStyles();
	const [autocomplete, setAutocomplete] = useState(null)

	const onLoad = (autoC) => setAutocomplete(autoC);

	const onPlaceChanged = () => {
		const lat = autocomplete.getPlace().geometry.location.lat();
		const lng = autocomplete.getPlace().geometry.location.lng();

		setCoords({ lat, lng });
	}

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
					<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
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
					</Autocomplete>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
