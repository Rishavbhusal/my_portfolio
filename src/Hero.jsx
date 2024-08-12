import Button from "./Button";
import myphoto from "./assets/portfolio.webp"
const Hero = () => {
  return (
    <div  className=" flex flex-col items-center justify-center  text-white ">


      <img src={myphoto} className="h-36 flex justify-center rounded-full " alt="" />
      <h1 className="text-2xl font-bold py-3">Hi, I'm Rishav </h1>
      <h2 className="text-xl font-medium py-3">Fullstack developer</h2>
      <p  className="text-center 2-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque error saepe reprehenderit voluptas quo corporis tenetur minus quae? Et, dolore nisi totam blanditiis aut repudiandae quae pariatur nesciunt maiores perferendis consectetur ratione impedit distinctio ipsam qui voluptate quisquam sapiente reiciendis ipsa similique non, sunt perspiciatis libero. Aspernatur, aliquid architecto eaque amet dolorum molestiae repellat? </p>
      <div className="flex gap-4  ">
       

        <div className=" flex justify-center py-9 space-x-7">
          
        <Button title="Contact Me" type="orange"  icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
        </div>
      </div>
    </div>
  );
};

export default Hero;