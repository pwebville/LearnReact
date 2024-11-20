// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

function Github() {
	const data = useLoaderData();
	/* const [data, setData] = useState([]);
	useEffect(() => {
		fetch('https://api.github.com/users/hiteshchoudhary')
		.then(response => response.json())
			.then(data => { 
				console.log(data);
				setData(data);
			})
	},[]) */
	return (
		<div className="text-center m-4 text-3xl flex items-center gap-6">
			<img src={data.avatar_url} alt="Git picture"  height={100} width={100}/>	
			Github followers: {data.followers}
		</div>
	)
}

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch('https://api.github.com/users/hiteshchoudhary');
	return response.json();
}

