import {useState, useEffect} from "react"

import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const categories = [
	"Choose a genre",
	"Business",
	"Fiction",
	"Horror",
	"Adventure",
]
const TopSeller = () => {
	const [selectedCategory, setSelectedCategory] = useState("Choose a genre")

	return (
		<div className='py-10'>
			<h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
			<div className='mb-8 flex-items-center'>
				<select
					onChange={(e) => selectedCategory(e.target.value)}
					name='category'
					id='category'
					className='border bg-[#EAEAEA] border-gray-300
					rounded-md px-4 py-2 focus:outline-none'
				>
					{categories.map((category, index) => (
						<option
							key={index}
							value={category}
						>
							{category}
						</option>
					))}
				</select>
			</div>
			<Swiper></Swiper>
		</div>
	)
}

export default TopSeller
