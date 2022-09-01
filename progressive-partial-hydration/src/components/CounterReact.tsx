import { useState } from 'react';
import './CounterReact.css';

export default function CounterReact({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);


	return (
		<>
			<button onClick={add}>Count {count}</button>
		</>
	);
}
