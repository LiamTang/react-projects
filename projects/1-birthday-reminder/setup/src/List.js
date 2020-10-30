/** @format */

import React, { Fragment } from "react";

const List = (props) => {
	const { people } = props;
	return (
		<Fragment>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<article className="person" key={id}>
						<img src={image} alt="avatar" />
						<div>
							<h4>{name}</h4>
							<p>{age} years</p>
						</div>
					</article>
				);
			})}
		</Fragment>
	);
};

export default List;
