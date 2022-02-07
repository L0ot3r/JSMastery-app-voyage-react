import React from 'react';
import {
	Box,
	Typography,
	Button,
	Card,
	CardMedia,
	CardActions,
	CardContent,
	Chip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/lab/Rating';

import useStyles from './style';

const PlaceDetails = ({ place }) => {
	const classes = useStyles();

	return (
		<Card elevation={6}>
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place.photo.images.large.url
						: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
				}
        title={place.name}
			/>
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Prix</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
          </Box>
        ))}
      </CardContent>
		</Card>
	);
};

export default PlaceDetails;
