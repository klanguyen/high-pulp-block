import React from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

export default class BlockApp extends React.Component {
	state = {
		movies: [],
		loggedIn: null,
	};

	addMovie(newMovie) {
		const movie = new wp.api.models.Movie(newMovie);
		movie.save().done(data => {
			console.log('Successfully added movie!', data);
			this.getMovies();
		}).fail(jqXHR => {
			console.error('Failed adding movie!', jqXHR);
		});
	};

	getMovies() {
		// by default, this gives us 10 results
		const movieCollection = new wp.api.collections.Movie();
		movieCollection.fetch({data: { _embed: true }})
			.done(data => {
				console.log('Successfully fetched!', data, movieCollection);
				// store the models in our state
				this.setState({movies: movieCollection.models});
			})
			.fail(jqXHR => {
				console.error('Failed fetching!', jqXHR);
			});
	};

	getLoggedInUser() {
		const user = new wp.api.models.UsersMe(); // get logged in user
		user.fetch()
			.done(user => {
				// logged in
				this.setState({loggedIn: true});
			})
			.fail(jqXHR => {
				// not logged in
				this.setState({loggedIn: false});
			});
	};

	componentDidMount() {
		this.getMovies();
		this.getLoggedInUser();
	};

	render() {
		return (
			<div>
				<div className="vote-section">
					<h3>Latest Movies</h3>
					<MovieList movies={this.state.movies} />
					<button className="vote-button" onClick={e => this.updateMovie(e)}>Vote</button>
				</div>
				<hr />
				<h3>Submit a Movie</h3>
				{this.state.loggedIn === true && <AddMovieForm addMovie={movieObj => this.addMovie(movieObj)} />}
				{this.state.loggedIn === false && <div className="error-msg">You must be logged in to submit a movie</div>}
			</div>
		);
	}
}
