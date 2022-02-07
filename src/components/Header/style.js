import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
      display: 'block',
		},
	},
  searchBox: {
    display: 'flex',
    alignItems: 'center',
  },
  titleSearch: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    left: 2,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '10ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  },
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
    alignItems: 'center',
	},
}));

export default useStyles;
