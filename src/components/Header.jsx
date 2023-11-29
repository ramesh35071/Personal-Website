import { useState } from "react";

const Header = () =>{

const  [brandName,setBrandName] = useState  ("Ramesh React Projects");

const [menuLinks,setMenuLinks] = useState(
    [
        {
            title:"Home",
            link:"/link",
            id:'1',
        },

        {
            title:"Home",
            link:"/link",
            id:'1',
        },

        {
            title:"About",
            link:"/about",
            id:'2',
        },

        {
            title:"Skills",
            link:"/skills",
            id:'3',
        },

        {
            title:"Portfolio",
            link:"/portfolio",
            id:'4',
        },

        {
            title:"Contact",
            link:"/contact",
            id:'5',
        },
        
    ]
)

    return(
        <>
        
            <div className="h-20 border main flex justify-between items-center bg-gray-200 px-16">
<div className="logo">
    <h1 className="text-2xl hover:text-orange-600">{brandName}</h1>
</div>
<div className="menu space-x-6">
    <a href="/home" className="hover:text-orange-600">Home</a>
    <a href="/about" className="hover:text-orange-600">About</a>
    <a href="/skills" className="hover:text-orange-600">Skills</a>
    <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
    <a href="/contact" className="hover:text-orange-600">Contact</a>
</div>
<div className="button">
    <button className="px-4 py-2 bg-orange-600 rounded-full shadow text-1xl">Hire Me</button>
</div>

            </div>

        </>
    
    );   
    
};
export default Header;