import bannerImage from '../assets/my.png'

import bannerBackground from '../assets/spectrum-gradient.svg'

const Banner = () => {

   



return (

        <div
            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover",
            }}
            className="main-container flex items-center">
            <div

                className="text-white flex justify-center py-6">
                <div
                    className='w-2/3 space-y-3 ms-10'>
                    <h3 className='text-3xl font-semibold'>Hi,I am</h3>
                    <h1 className='text-5xl font-bold'>Ramesh Pandey</h1>
                    <h2 className=' text-2xl font-bold'>And I am a Frontend Developer</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae odio nisi deserunt nam quos laboriosam voluptatum quod accusantium libero.</p>

                    <div className='icons-container space-x-5 flex'>
                        <a className='hover:bg-orange-500 cursor-pointer bg-gray-800 w-14 h-14 rounded-full flex justify-center items-center'>
                        <i class="fa-brands text-4xl  fa-facebook"></i>
                        </a>
                        <a className='hover:bg-orange-500 cursor-pointer bg-gray-800 w-14 h-14 rounded-full flex justify-center items-center'>
                        <i class="fa-brands text-4xl  fa-square-instagram"></i>
                        </a>
                        <a className='hover:bg-orange-500 cursor-pointer bg-gray-800 w-14 h-14 rounded-full flex justify-center items-center'>
                        <i class="fa-brands text-4xl  fa-square-youtube"></i>
                        </a>
                        
                        <a className='hover:bg-orange-500 cursor-pointer bg-gray-800 w-14 h-14 rounded-full flex justify-center items-center'>
                        <i class="fa-brands text-4xl  fa-linkedin"></i>
                        </a>
                        
                    </div>
<br />
                    
                    <a className='hover:bg-blue-500 text-xl px-3 mt-3 py-2 bg-orange-500  rounded-full shadow' href="/contact">Contact Me</a>
                </div>

            </div>


            <div className=" w-full flex justify-center">
                <img className='rounded-full shadow' src={bannerImage} />
            </div>
        </div>



    );
};

export default Banner;