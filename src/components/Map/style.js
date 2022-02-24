import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	paper: {
		padding: '10px',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		width: '100px',
		'& img': {
			width: '100%',
			maxHeight: '60px',
			objectFit: 'cover',
			marginBottom: '5px',
		},
		'&:hover': {
			transform: 'scale(1.5)',
		}
	},
	mapContainer: {
		height: '85vh',
		width: '100%',
	},
	markerContainer: {
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		zIndex: 1,
		'&:hover': { zIndex: 100 },
	},
	pointer: {
		cursor: 'pointer',
	},
}));

export default useStyles;
