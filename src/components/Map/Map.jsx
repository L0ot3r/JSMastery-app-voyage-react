import React from 'react';
import GooggleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon  from '@mui/icons-material/LocalActivityOutlined';
import Rating from '@mui/lab';

import useStyles from './style';

const Map = ({ setCoords, setBounds, coords }) => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(min-width:600px)');

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
				// onChildClick={''}
			></GooggleMapReact>
		</div>
	);
};

export default Map;
