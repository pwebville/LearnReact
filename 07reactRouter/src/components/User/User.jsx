import { useParams } from "react-router-dom"

function User() {
	const { userid } = useParams();
	return (
		<div className="container bg-gray-500 text-white py-4 px-6 text-center mx-auto">User: {userid}</div>
	)
}

export default User