import React from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends React.Component {
	render(){
		return (
			<div className="movie-list">
				{this.props.movies.map(movie => (
					<MovieCard title={movie.attributes.title.rendered}
								description={movie.attributes.content.rendered}
								posterUrl={movie.attributes._embedded['wp:featuredmedia']['0'].source_url}
								genres={movie.attributes.acf.movie_genres}
								voteCount={movie.attributes.acf.movie_vote_count}
								key={movie.attributes.id}
					/>
				))}
			</div>
		)
	}

}
