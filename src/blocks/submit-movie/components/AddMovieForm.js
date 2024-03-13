import React from "react";

var image;
export default class AddMovieForm extends React.Component {
	state = {
		title: '',
		description: '',
		posterId: '',
		genres: [],
		voteCount: 0,
		submittedBy: ''
	};

	openMediaLibrary(e) {
		e.preventDefault();

		image = wp.media({
			title: 'Upload Image',
			type: 'image',
			multiple: false,
			button: {
				text: 'Done'
			}
		}).open();

		image.on('select', (e) => {
			var uploadedImgId = image.state().get('selection').first().toJSON().id;
			//jQuery('input#imageId').val(uploadedImgId);
			this.setState({posterId: uploadedImgId});
		})
	}

	handleCheckboxChange(e) {
		let newArray = [...this.state.genres, e.target.value];
		if (this.state.genres.includes(e.target.value)) {
			newArray = newArray.filter(genre => genre !== e.target.value);
		}
		this.setState({
			genres: newArray
		});
	};


	addMovie(e) {
		e.preventDefault();

		//this.state.posterId = parseInt(jQuery('input#imageId').val());
		console.log(this.state.posterId);


		const newMovie = {
			title: this.state.title,
			content: this.state.description,
			featured_media: this.state.posterId,
			acf: {
				movie_genres: this.state.genres,
				movie_vote_count: parseInt(this.state.rating) || 0,
				movie_submitted_by: this.state.submittedBy
			},

			// maybe you should validate better before doing this?
			status: 'publish',
		}

		// we can't assume any props are provided
		// ?. only calls the method if it exists
		this.props.addMovie?.(newMovie);

		this.setState({
			title: '',
			description: '',
			posterId: '',
			genres: '',
			submittedBy: ''
		})

		jQuery(document.querySelectorAll('input[name="genres"]').forEach( el => el.checked = false ));
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
						Poster Image
					</label><br/>
					<button
						type="button"
						onClick={e => this.openMediaLibrary(e)}>
						Upload Image
					</button>
				</div>

				<div>
					<label>
						Description:
						<textarea
							   value={this.state.description}
							   onInput={e => this.setState({description: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Genres:
					</label><br/>
					<input
						type="checkbox"
						id="horror"
						value="Horror"
						name="genres"
						onChange={e => this.handleCheckboxChange(e)}
					/>
					<label htmlFor="horror">Horror</label><br/>
					<input
						type="checkbox"
						id="action"
						value="Action"
						name="genres"
						onChange={e => this.handleCheckboxChange(e)}
					/>
					<label htmlFor="action">Action</label><br/>
					<input
						type="checkbox"
						id="sci-fi"
						value="Sci-Fi"
						name="genres"
						onChange={e => this.handleCheckboxChange(e)}
					/>
					<label htmlFor="sci-fi">Sci-Fi</label><br/>
					<input
						type="checkbox"
						id="drama"
						value="Drama"
						name="genres"
						onChange={e => this.handleCheckboxChange(e)}
					/>
					<label htmlFor="drama">Drama</label><br/>
					<input
						type="checkbox"
						id="mystery"
						value="Mystery"
						name="genres"
						onChange={e => this.handleCheckboxChange(e)}
					/>
					<label htmlFor="mystery">Mystery</label><br/>
					<input
						type="checkbox"
						id="comedy"
						value="Comedy"
						name="genres"
						onChange={e => this.handleCheckboxChange(e)}
					/>
					<label htmlFor="comedy">Comedy</label>
				</div>

				<div>
					<label>
						Submitted by:
						<input type="text"
							   value={this.state.submittedBy}
							   onInput={e => this.setState({submittedBy: e.target.value})}
						/>
					</label>
				</div>

				<button type="submit">Add Movie</button>
			</form>
		);
	}

};
