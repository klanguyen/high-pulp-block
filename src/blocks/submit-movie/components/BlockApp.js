import React, {useState} from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

export default class BlockApp extends React.Component {
	state = {
		movies: [],
		loggedIn: null,
		selectedMovieId: '',
		newVoteCount: 0,
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
		movieCollection.fetch({data: { _embed: true, }, orderby: 'title', order: 'DESC' })
			.done(data => {
				console.log('Successfully fetched!', data, movieCollection);
				// store the models in our state
				this.setState({movies: movieCollection.models});
			})
			.fail(jqXHR => {
				console.error('Failed fetching!', jqXHR);
			});
	};

	handleInput(id) {
		this.setState({selectedMovieId: parseInt(id)});
	};

	updateSelectedMovie(e) {
		e.preventDefault();
		console.log('Voting for movie id: ' + this.state.selectedMovieId);
		const theMovie = new wp.api.models.Movie({ id: this.state.selectedMovieId });
		theMovie.fetch()
				.done(data => {
					console.log('Successfully fetched!', data, theMovie);
					this.setState({newVoteCount : theMovie.attributes.acf.movie_vote_count + 1}, () => {
						console.log('New vote count: ' + this.state.newVoteCount);

						// update
						theMovie.save({
								acf: {
									movie_vote_count: this.state.newVoteCount
								}
							}, { patch: true }
						).done(data => {
							console.log('Successfully updated movie', data);
							this.getMovies();
						}).fail(jqXHR => {
							console.error('Failed updating movie', jqXHR);
						});
					});
				})
				.fail(jqXHR => {
					console.error('Failed fetching!', jqXHR);
				});
	}

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
					<MovieList movies={this.state.movies} getSelectedMovieId={id => this.handleInput(id)}/>
					<button className="vote-button" onClick={e => this.updateSelectedMovie(e)}>Vote</button>
				</div>
				<hr />
				<h3>Submit a Movie</h3>
				{this.state.loggedIn === true && <AddMovieForm addMovie={movieObj => this.addMovie(movieObj)} />}
				{this.state.loggedIn === false && <div className="error-msg">You must be logged in to submit a movie</div>}
			</div>
		);
	}
}
