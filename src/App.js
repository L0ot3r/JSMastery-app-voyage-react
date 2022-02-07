import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const theme = createTheme({});

const App = () => {
	const [places, setPlaces] = useState([]);
	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	useEffect(() => {
		getPlacesData(bounds.ne, bounds.sw).then((data) => {
			setPlaces(data);
		});
	}, [bounds]);

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Container spacing={3} maxWidth='xl' sx={{ marginTop: 2 }}>
					<Grid container style={{ width: '100%' }}>
						<Grid item xs={12} md={4}>
							<List places={places} />
						</Grid>
						<Grid item xs={12} md={8}>
							<Map
								setCoords={setCoords}
								setBounds={setBounds}
								coords={coords}
							/>
						</Grid>
					</Grid>
				</Container>
			</ThemeProvider>
		</>
	);
};

export default App;
