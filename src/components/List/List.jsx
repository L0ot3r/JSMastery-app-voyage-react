import React, { useState } from 'react';
import {
	CircularProgress,
	Grid,
	Typography,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from '@mui/material';

import useStyles from './style';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places }) => {
	const classes = useStyles();
	const [type, setType] = useState('');
	const [rating, setRating] = useState('');

	return (
		<div className={classes.container}>
			<Grid container spacing={2}>
				<Grid item md={12}>
					<Typography variant='h4'>
						Restaurants, Hôtels &amp; Attractions autour de vous
					</Typography>
				</Grid>
				<Grid item md={12}>
					<FormControl
						className={classes.formControl}
						sx={{ mr: 2, minWidth: 125 }}
					>
						<InputLabel id='label-type'>Type</InputLabel>
						<Select
							label='Type'
							labelId='label-type'
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<MenuItem value='restaurants'>Restaurants</MenuItem>
							<MenuItem value='hotels'>Hôtels</MenuItem>
							<MenuItem value='attractions'>Attractions</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={classes.formControl} sx={{ minWidth: 125 }}>
						<InputLabel id='label-rating'>Evaluations</InputLabel>
						<Select
							label='Evaluations'
							labelId='label-rating'
							value={rating}
							onChange={(e) => setRating(e.target.value)}
						>
							<MenuItem value={0}>Toutes</MenuItem>
							<MenuItem value={3}>Plus de 3.0</MenuItem>
							<MenuItem value={4}>Plus de 4.0</MenuItem>
							<MenuItem value={4.5}>Plus de 4.5</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item md={12} sx={{ marginTop: '30px' }}>
					<Grid container spacing={3} className={classes.list} sx={{ paddingRight: 2 }}>
						{places?.map((place, index) => (
							<Grid item key={index} xs={12}>
								<PlaceDetails place={place} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default List;
