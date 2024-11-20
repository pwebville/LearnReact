import { useEffect, useState } from 'react';

function useCurrenctyInfo(currency) {
	cons[data, setData] = useState({});
	useEffect(() => {
		fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.11.2/v1/currencies/${currency}.json`)
			.then((res) => res.json())
			.then((rest) => setData(res[currency]))
		console.log(data);
		
	}, [currency])
	console.log(data);
	return data;
}

export default useCurrenctyInfo;