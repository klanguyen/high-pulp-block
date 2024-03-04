import React from "react";
import StaffList from "./StaffList";
import {TextControl} from "@wordpress/components";

export default class BlockApp extends React.Component {
	state = {
		staff: [],
		filterKeyword: '',
		filteredStaff: [],
	}
	constructor(props){
		super(props);

		// ajax call
		fetch('/wp-json/wp/v2/staff?_embed')
			.then(response => response.json())
			.then(json => {
				console.log(json);
				this.setState({staff: json, filteredStaff: json});
			})
			.catch(error => {
				console.error('WP JSON ERROR', error)
			})
	}
	// another common place to make ajax calls (like mounted in Vue)
	// componentDidMount(){ }

	doFilter(filterKeyword){
		const filteredStaff = this.state.staff.filter(person => {
			return person.title.rendered.toLowerCase().includes(filterKeyword.toLowerCase());
		});

		this.setState({
			filterKeyword, filteredStaff
		});
	}

	// render() is like <template>
	render() {
		return (
			<div>
				<h3>Staff Finder</h3>
				<label>Search <input
					type="text"
					value={this.state.filterKeyword}
					onInput={event => this.doFilter(event.target.value)}
				/></label>
				{/*<TextControl label="Search"
							 value={this.state.filterKeyword}
							 onChange={value => this.doFilter(value)}
				 />*/}
				<StaffList staff={this.state.filteredStaff}/>
			</div>
		)
	}
}
