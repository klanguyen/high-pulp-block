import React from "react";

export default class MovieCard extends React.Component {
	render(){
		let { title, description, posterUrl, genres, voteCount } = this.props;

		return (
			<div className="movie-card">
				<div className="movie-info">
					<div className="movie-header">
						<img className="movie-poster" src={posterUrl} />
						<h4 dangerouslySetInnerHTML={{__html: title}}></h4>
						<ul className="movie-genres">
							{genres.map(genre => (
								<li className="genre-item">{genre}</li>
							))}
						</ul>
					</div>
					<div className="movie-description" dangerouslySetInnerHTML={{__html: description}}>
					</div>
					<div><p>{voteCount} votes</p></div>
				</div>
			</div>
		)
	}

}
