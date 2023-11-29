const Services = () =>{
    return(
        <>
        
        <div className="main-container py-14 ">
<h1 className="text-5xl font-bold text-center underline" >My Services</h1>

<div className="services-container space-x-5 px-5 flex mt-10">

    <div className="cursor-pointer hover:bg-slate-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl service-one space-y-4">

    <i class="text-5xl fa-brands fa-aws"></i>
    <h1 className="text-3xl">Web Development</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero provident, mollitia ipsa sint facilis expedita ad voluptate blanditiis ullam quas.</p>
    <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow">Check</button>  
    </div>

    <div className="cursor-pointer hover:bg-slate-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl service-two space-y-4">
    <i class="text-5xl fa-solid fa-mobile"></i>
    <h1 className="text-3xl">Android Development</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero provident, mollitia ipsa sint facilis expedita ad voluptate blanditiis ullam quas.</p>
    <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow">Check</button>
    </div>

    <div className="cursor-pointer hover:bg-slate-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl service-three space-y-4">
    <i class=" text-5xl fa-solid fa-server"></i>
    <h1 className="text-3xl">Backend Development</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero provident, mollitia ipsa sint facilis expedita ad voluptate blanditiis ullam quas.</p>
    <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow">Check</button>
    </div>




</div>

        </div>
        
        </>
    ); 
};

export default Services;