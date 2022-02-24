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
	Rating,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

import useStyles from './style';

const PlaceDetails = ({ place, selected, refProp, id }) => {
	const classes = useStyles();

	if (selected) {
		refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

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
				<Typography gutterBottom variant='h5'>
					{place.name}
				</Typography>
				<Box display='flex' justifyContent='space-between'>
					<Rating value={Number(place.rating)} precision={0.5} readOnly />
					<Typography gutterBottom variant='subtitle1'>
						sur {place.num_reviews} votes
					</Typography>
				</Box>
				<Box display='flex' justifyContent='space-between'>
					<Typography variant='subtitle1'>Prix</Typography>
					<Typography gutterBottom variant='subtitle1'>
						{place.price_level}
					</Typography>
				</Box>
				<Box display='flex' justifyContent='space-between'>
					<Typography variant='subtitle1'>Classement</Typography>
					<Typography gutterBottom variant='subtitle1'>
						{place.ranking}
					</Typography>
				</Box>
				{place?.awards?.map((award, index) => (
					<Box
						key={index}
						my={1}
						display='flex'
						justifyContent='space-between'
						alignItems='center'
					>
						<img src={award.images.small} alt={award.display_name} />
						<Typography variant='subtitle2' color='textSecondary'>
							{award.display_name}
						</Typography>
					</Box>
				))}
				{place?.cuisine?.map(({ name, key }) => (
					<Chip key={key} size='small' label={name} className={classes.chip} />
				))}
				{place?.address && (
					<Box mt={1}>
						<Typography
							gutterBottom
							variant='subtitle2'
							color='textSecondary'
							className={classes.subtitle}
						>
							<LocationOnIcon /> {place.address}
						</Typography>
					</Box>
				)}
				{place?.phone && (
					<Box mt={1}>
						<Typography
							gutterBottom
							variant='subtitle2'
							color='textSecondary'
							className={classes.spacing}
						>
							<PhoneIcon /> {place.phone}
						</Typography>
					</Box>
				)}
				<CardActions>
					<Button
						size='small'
						color='primary'
						onClick={() => window.open(place.web_url, '_blank')}
					>
						Trip Advisor
					</Button>
					<Button
						size='small'
						color='primary'
						onClick={() => window.open(place.website, '_blank')}
					>
						Site internet
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default PlaceDetails;
