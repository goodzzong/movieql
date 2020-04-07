import { getMovies, getMovie } from './db';

const resolvers = {
	Query: {
		movies: (_, { rating, limit }) => getMovies(limit, rating),
		movie: (_, { id }) => getMovie(id)
	}
};

// const resolvers = {
// 	Query: {
// 		hello: (_, { name}) => `Hello ${name || 'World1'}`,
// 	},
// };


export default resolvers;