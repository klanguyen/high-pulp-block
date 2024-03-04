import React from "react";

export default class StaffListItem extends React.Component {
	stripHtml(html)
	{
		let tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText || "";
	}
	render() {
		const {person} = this.props;
		// or const person = this.props.person; <- this is not really optimizing though


		return (
			/*<li>
				{ person.title.rendered }
			</li>*/
			<a className="flip-card" href={person.link}>
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img src={person._embedded['wp:featuredmedia']['0'].source_url} />
					</div>
					<div className="flip-card-back">
						<h3 className="name">{ person.title.rendered }</h3>
						<div className="position">{ person.acf.staff_position}</div>
						<div className="bio">
							{ this.stripHtml(person.content.rendered) }
						</div>
					</div>
				</div>
			</a>
		)
	}
}
