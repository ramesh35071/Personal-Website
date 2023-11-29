import bannerImage from '../assets/mee.png';
const About = () =>{
    return (
    <>

<div className="main-container py-16 ">
<h1 className="text-center text-5xl font-bold underline py-16">About Me</h1>
</div>
 
<div className="flex items-center  bg-gray-100">

    <div className="image w-full flex justify-center  ">
<img className='w-fit' src={bannerImage} alt="" />
    </div>
    <div className="text w-full flex justify-center">
<div className='space-y-5 w-2/3 '>
<h1 className='text-4xl font-semibold '>Java Developer & Android Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint at et error fuga ex ipsam a ratione necessitatibus provident.</p>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur dicta rem earum tempore quis. Laudantium sint nesciunt beatae quam, deserunt repellendus ut, quo consequatur possimus saepe numquam commodi adipisci aut?</p>

       <button className='bg-orange-500 rounded-full px-4 py-2 text-2xl shadow'>Read More</button>
        
</div>

        
    </div>

</div>



    </>
        
    )
};

export default About;