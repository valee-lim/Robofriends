import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className="bg-light-green dib br3 pa4 ma2 grow shadow-5 bw2">
			<img alt='robots' src={`https://robohash.org/${name}?size=150x150`}/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;
