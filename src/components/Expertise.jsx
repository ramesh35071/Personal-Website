import bannerBackground from '../assets/spectrum-gradient.svg';
const Expertise = () =>{
    return( 
        <>
        <div className="py-16">
            <h1 className="text-5xl text-center font-bold underline">My Expertise</h1>

            {/* Expertise box section */}

<div
style={{
    backgroundImage: `url(${bannerBackground})`,
    backgroundSize: "cover",
}}
className="expertise-container flex mt-10 items-center">
    <div className="text-container flex justify-center" >
        <div className="w-2/3 text-center space-y-4 p-3">
        <h1 className="text-3xl font-semibold mt-8">I love these Technologies</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sunt soluta quos possimus, quis recusandae quasi. Quidem perferendis repellendus vitae sed laboriosam ut libero commodi nobis culpa minus, doloribus blanditiis!</p>
    <button className="hover:bg-blue-500 px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">Hire Me</button>
        </div>
    </div>
    <div className="skill-container w-2/3 flex justify-center">
  <div className="flex space-x-3 flex-wrap space-y-3">
  <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Core Java</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">J2EE</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Hibernate (ORM Tool)</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Spring Framework</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Spring Boot Framework</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Spring Security</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">JavaScript</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Python</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Angular</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Reactjs</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Nextjs</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Talewind CSS</p>
        <p className="bg-gray-200 w-fit px-3 py-2 rounded-full hover:bg-orange-500">Bootstrap</p>
  </div>
       
    </div>
</div>

        </div>
        </>
    )
    
};

export default Expertise;