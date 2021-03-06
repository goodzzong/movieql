export const people = [
	{
		id: 0,
		name: "Goodzzong",
		age: 15,
		gender: "male"
	},
	{
		id: 1,
		name: "Mya",
		age: 16,
		gender: "female"
	},
	{
		id: 2,
		name: "Jisu",
		age: 18,
		gender: "male"
	},
	{
		id: 3,
		name: "Daal",
		age: 21,
		gender: "male"
	},
	{
		id: 4,
		name: "moondaddi",
		age: 23,
		gender: "male"
	}
];

export let movies = [
	{
		id: 0,
		name: "Star Wars - The new one",
		score: 2
	},
	{
		id: 1,
		name: "Avengers - End Game",
		score: 99
	},
	{
		id: 2,
		name: "The Godfather I",
		score: 91
	},
	{
		id: 3,
		name: "Logan",
		score: 22
	}
];

export const getMovies = () => movies;

export const getById = id => {
	const filteredPeople = people.filter(person => person.id === id);
	return filteredPeople[0];
};

export const getByMovieId = id => {
	const filteredMovie = movies.filter(movie => movie.id === id);
	return filteredMovie[0];
};

export const deleteMovie = id => {
	const cleanedMovies = movies.filter(movie => movie.id !== id);
	if (movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		return true;
	} else {
		false;
	}
};

export const addMovie = (name, score) => {
	
	const newMovie = {
		id: movies.length + 1,
		name, 
		score
	};

	movies = movies.concat(newMovie);
	return newMovie;
};
