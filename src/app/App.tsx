import { useState } from 'react';

import css from './App.module.scss';

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div className={css['container']}>
				<h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, aut.</h1>
			</div>
		</div>
	);
};
