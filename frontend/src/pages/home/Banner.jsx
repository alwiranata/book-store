import Benner from "../../assets/banner.png"

const Banner = () => {
	return (
		<div className='flex flex-col md:flex-row-reverse py-16  justify-between items-center gap-12'>
			<div className='md:w-1/2 w-full flex items-center md:justify-end'>
				<img
		 			src={Benner}
					alt=''
				/>
			</div>

			<div className='md:w-1/2 w-full'>
				<h1 className='md:text-5xl text-2xl font-medium mb-7'>
					New Releases This Week
				</h1>
				<p className='mb-10'>
					Ready for a reading adventure? This weeks newest releases bring a
					diverse range of stories, from edge-of-your-seat thrillers to
					inspiring memoirs, perfect for any book lover looking to dive into
					something exciting
				</p>
				<button className='btn-primary'>Sign Up</button>
			</div>
		</div>
	)
}

export default Banner
