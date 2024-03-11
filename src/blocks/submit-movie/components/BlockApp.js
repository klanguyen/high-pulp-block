import React from "react";
import AddMovieForm from "./AddMovieForm";

export default class BlockApp extends React.Component {
	state = {
		reviews: [],
		loggedIn: null,
	};

	render() {
		return (
			<div>
				<h3>Latest Movies</h3>
				<div>TODO</div>
				<hr />
				<h3>Submit a Movie</h3>
				<AddMovieForm />
			</div>
		);
	}
}
