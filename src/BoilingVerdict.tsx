import React from 'react';

export const BoilingVerdict: React.FC<{celsius:number}> = ({celsius}) => {

	return (
		<div>
			{celsius >= 100 ?(
			<p>The water would boil</p>
			) :(
			<p>The water would not boild</p>
			)}
		</div>
	);
};