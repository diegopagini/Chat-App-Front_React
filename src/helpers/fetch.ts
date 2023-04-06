/** @format */

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchProps {
	endpoint: string;
	data: any;
	method: Method;
}

export const fetchWithoutToken = async ({ endpoint, data, method = 'GET' }: FetchProps) => {
	const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

	if (method === 'GET') return (await fetch(url)).json();

	return (
		await fetch(url, {
			headers: {
				'Content-type': 'application/json',
			},
			method,
			body: JSON.stringify(data),
		})
	).json();
};
