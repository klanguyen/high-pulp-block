import React from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends React.Component {
	setSelectedMovieId(e) {
		e.preventDefault();
		this.props.getSelectedMovieId?.(e.target.value);
		console.log('Movie List selected: ' + e.target.value);
	}

	render(){
		return (
			<div className="movie-list">
				{this.props.movies.map(movie => (
				<div className="movie-card">
					<label className="movie-wrapper">
						<input
							type="radio"
							name="movie-of-the-month"
							className="movie-input"
							value={movie.attributes.id}
							onChange={e => this.setSelectedMovieId(e)}
						/>
						<MovieCard title={movie.attributes.title.rendered}
									description={movie.attributes.content.rendered}
									posterUrl={movie.attributes._embedded['wp:featuredmedia']['0'].source_url}
									genres={movie.attributes.acf.movie_genres}
									voteCount={movie.attributes.acf.movie_vote_count}
									submittedBy={movie.attributes.acf.movie_submitted_by}
									movieId={movie.attributes.id}
									key={movie.attributes.id}
						/>
					</label>
				</div>
				))}
			</div>
		)
	}

}
