import axios from 'axios';

const URL =
	'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
			},
			headers: {
				'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
				'x-rapidapi-key': '183df9766cmsh74be9e9c1bdea8ep1d9189jsnc9fe384ce478',
			},
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};
