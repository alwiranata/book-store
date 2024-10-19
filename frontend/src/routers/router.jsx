import {createBrowserRouter} from "react-router-dom"
import App from "../App"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: "Home",
			},
			{
				path: "/orders ",
				element: "orders",
			},
			{
				path: "/about",
				element: "about",
			},
		],
	},
])

export default router
