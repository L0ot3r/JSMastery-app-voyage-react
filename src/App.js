import React, { useEffect, useState } from 'react';
import useStyles from './utils/stylesGlobal';

import { getPlacesData } from './api';

import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';

import {
	ThemeProvider,
	createTheme,
	CssBaseline,
	Grid,
	Container,
} from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#e64a19',
		},
		secondary: {
			main: '#3d5afe',
		},
	},
});

const App = () => {
	const classes = useStyles();

	const [places, setPlaces] = useState([]);
	const [filteredPlaces, setFilteredPlaces] = useState([]);

	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState({});

	const [childClicked, setChildClicked] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const [type, setType] = useState('restaurants');
	const [rating, setRating] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	useEffect(() => {
		const filteredPlaces = places.filter((place) => place.rating > rating);

		setFilteredPlaces(filteredPlaces);
	}, [rating]);

	useEffect(() => {
		if (bounds) {
			setIsLoading(true);
			getPlacesData(type, bounds.ne, bounds.sw).then((data) => {
				setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
				setFilteredPlaces([]);
				setIsLoading(false);
			});
		}
	}, [bounds, type]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header setCoords={setCoords} />
			<Container spacing={3} maxWidth='xl' className={classes.container}>
				<Grid container style={{ width: '100%' }}>
					<Grid item xs={12} md={4}>
						<List
							places={filteredPlaces.length ? filteredPlaces : places}
							childClicked={childClicked}
							isLoading={isLoading}
							type={type}
							setType={setType}
							rating={rating}
							setRating={setRating}
						/>
					</Grid>
					<Grid item xs={12} md={8}>
						<Map
							setCoords={setCoords}
							setBounds={setBounds}
							setChildClicked={setChildClicked}
							coords={coords}
							places={filteredPlaces.length ? filteredPlaces : places}
						/>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
};

export default App;
