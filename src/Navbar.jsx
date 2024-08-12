

const Navbar = () => {
  const navList = [
    "Home",
    "About me", 
    "Skills","Projects","Contact"]
  return (
  
 <nav className="border-2 py-3  px-3 mx-auto w-[82%] my-7 rounded-full font-medium ">

  <ul className="flex gap-4 justify-around">
 
   
{navList.map((items,index)=>(
   
  <li className="text-white hover:text-blue-600 hover:scale-150 transition-all duration-400 cursor-pointer "key={index}>{items}</li>
))}
</ul>

</nav>
  
  );
};

export default Navbar