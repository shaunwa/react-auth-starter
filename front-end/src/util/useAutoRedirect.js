import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useAutoRedirect = (url, delay) => {
	const history = useHistory();

	useEffect(() => {
		setTimeout(() => {
			history.push(url);
		}, delay);
	}, [history, delay, url]);
}