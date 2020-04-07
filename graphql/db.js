import axios from 'axios';

const API_URL = "https://yts.mx/api/v2/list_movies.json";
const DETAIL_URL = "https://yts.mx/api/v2/movie_details.json";
export const getMovies = async (limit, rating) => {
	try {
		const {
			data: {
				data: { movies }
			}
		} = await axios.get(API_URL, 
			{
				params: {
					limit,
					minimum_rating: rating
				}
			});
		return movies;
	} catch (error) {
		console.error(error);
	}
}

export const getMovie = async id => {
	try {
		const {
			data: {
				data: { movie }
			}
		} = await axios.get(DETAIL_URL, {
			params: { movie_id: id }
		});

		return movie;
	} catch (error) {
		console.error(error);
	}
}