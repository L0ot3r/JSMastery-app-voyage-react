import React from 'react';
import GooggleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import useStyles from './style';

const Map = ({ setCoords, setBounds, coords, places, setChildClicked }) => {
	const classes = useStyles();
	const isDesktop = useMediaQuery('(min-width:600px)');

	return (
		<div className={classes.mapContainer}>
			<GooggleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyDwOJTzmUMo3FGqY8FzdeCf2PC2SArGlvE' }}
				defaultCenter={coords}
				center={coords}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={''}
				onChange={(e) => {
					setCoords({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
				}}
				onChildClick={(child) => setChildClicked(Number(child))}
			>
				{places?.map((place, i) => (
					<div
						className={classes.markerContainer}
						lat={Number(place.latitude)}
						lng={Number(place.longitude)}
						key={i}
					>
						{!isDesktop ? (
							<LocationOnOutlinedIcon color='primary' fontSize='large' />
						) : (
							<Paper elevation={3} className={classes.paper}>
								<Typography
									className={classes.typography}
									variant='subtitle2'
									gutterBottom
								>
									{place.name}
								</Typography>
								<img
									className={classes.pointer}
									src={
										place.photo
											? place.photo.images.large.url
											: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
									}
									alt={place.name}
								/>
								<Rating size='small' value={Number(place.rating)} precision={0.5} readOnly />
							</Paper>
						)}
					</div>
				))}
			</GooggleMapReact>
		</div>
	);
};

export default Map;
