import React from "react";

export default class MovieCard extends React.Component {
	render(){
		let { title, description, posterUrl, genres, voteCount, submittedBy } = this.props;

		return (
			/*<div className="movie-card">
				<div className="movie-info">
					<div className="movie-header">
						<img className="movie-poster" src={posterUrl} />
						<h4 dangerouslySetInnerHTML={{__html: title}}></h4>
						<span>Submitted by: {submittedBy}</span>
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
			</div>*/
			<div className="movie-card">
				<label className="movie-wrapper">
					<input type="radio" name="movie-of-the-month" className="movie-input" />
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
						</span>
					</span>
				</label>
			</div>
		)
	}

}
