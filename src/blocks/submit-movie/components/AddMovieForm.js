import React from "react";

export default class AddMovieForm extends React.Component {
	state = {
		title: '',
		description: '',
		poster: '',
		genres: [],
		voteCount: 0,
	};

	addMovie(e) {
		e.preventDefault();

		const newMovie = {
			title: this.state.title,
			content: this.state.description,
			acf: {
				movie_poster_image: this.state.poster,
				movie_genres: this.state.genres,
				movie_vote_count: parseInt(this.state.rating) || 0,
			},

			// maybe you should validate better before doing this?
			status: 'publish',
		}

		// we can't assume any props are provided
		// ?. only calls the method if it exists
		this.props.addMovie?.(newMovie);
	}

	render() {
		return (
			<form
				className="new-movie-form"
				onSubmit={e => this.addMovie(e)}
			>
				<div>
					<label>
						Title:
						<input type="text"
							   value={this.state.title}
							   onInput={e => this.setState({title: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Description:
						<textarea
							   value={this.state.description}
							   onInput={e => this.setState({title: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Genres:
					</label><br/>
					<input type="checkbox" id="horror" value="Horror" name="genres" />
					<label htmlFor="horror">Horror</label><br/>
					<input type="checkbox" id="action" value="Action" name="genres" />
					<label htmlFor="action">Action</label><br/>
					<input type="checkbox" id="sci-fi" value="Sci-Fi" name="genres" />
					<label htmlFor="sci-fi">Sci-Fi</label><br/>
					<input type="checkbox" id="drama" value="Drama" name="genres" />
					<label htmlFor="drama">Drama</label><br/>
					<input type="checkbox" id="mystery" value="Mystery" name="genres" />
					<label htmlFor="mystery">Mystery</label><br/>
					<input type="checkbox" id="comedy" value="Comedy" name="genres" />
					<label htmlFor="comedy">Comedy</label>
				</div>

				{/*<div>
					<label>
						Overall Rating:
						<input type="number"
							   value={this.state.rating}
							   onInput={e => this.setState({rating: e.target.value})}
						/>
					</label>
				</div>*/}

				<button type="submit">Add Movie</button>
			</form>
		);
	}

};
