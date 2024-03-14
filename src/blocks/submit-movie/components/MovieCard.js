import React from "react";

export default class MovieCard extends React.Component {
	render(){
		let { title, description, posterUrl, genres, voteCount, submittedBy, movieId } = this.props;

		return (
				<span className="movie-info">
					<img src={posterUrl} className="movie-image" />
					<span className="movie-data">
						<h4 className="movie-title" dangerouslySetInnerHTML={{__html: title}}></h4>
						<span>Submitted by: {submittedBy}</span>
						<ul className="movie-genres">
							{genres.map(genre => (
								<li className="genre-item">{genre}</li>
							))}
						</ul>
						<p className="movie-description" dangerouslySetInnerHTML={{__html: description}}></p>
						<span className='vote-count'>{voteCount} votes</span>
					</span>
				</span>

		)
	}

}
