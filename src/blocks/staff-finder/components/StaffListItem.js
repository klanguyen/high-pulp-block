import React from "react";

export default class StaffListItem extends React.Component {
	render() {
		const {person} = this.props;
		// or const person = this.props.person; <- this is not really optimizing though
		return (
			<li>
				{ person.title.rendered }
			</li>
		)
	}
}
