import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	loading: {
		height: '600px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		padding: '15px',
	},
	marginBottom: {
		marginBottom: '30px',
	},
	list: {
		height: '75vh',
		overflow: 'auto',
	},
}));

export default useStyles;
