import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
const footer = () => {
  return (
    <div className="w-full bg-foot py-24 px-4 bg-no-repeat bg-center bg-cover">
      <div className="max-w-[1240px] m-auto grid md:grid-cols-4 justify-center grid-col-2 ">
        <div className="justify-start">
          <h3>Explore Our Menu</h3>
          <p className="text-[#ccc] uppercase p-2">Menu</p>
          <p className="text-[#ccc] uppercase p-2">Nutrition</p>
          <p className="text-[#ccc] uppercase p-2">Ingredients</p>
          <p className="text-[#ccc] uppercase p-2">Drink Menu</p>
        </div>
        <div>
          <h3>Get To Know Us</h3>
          <p className="text-[#ccc] uppercase p-2">About Us</p>
          <p className="text-[#ccc] uppercase p-2">Franchising</p>
          <p className="text-[#ccc] uppercase p-2">Foundation</p>
          <p className="text-[#ccc] uppercase p-2">Mission Statement</p>
          <p className="text-[#ccc] uppercase p-2">Goals</p>
        </div>
        <div>
          <h3>Get In Touch</h3>
          <p className="text-[#ccc] uppercase p-2">Press</p>
          <p className="text-[#ccc] uppercase p-2">Careers</p>
          <p className="text-[#ccc] uppercase p-2">Contact Us</p>
          <p className="text-[#ccc] uppercase p-2">Get Socials</p>
        </div>
        <div>
          <h3>Let&apos;s Connect</h3>
          <div>
            <FaFacebook className="text-3xl mt-2 mr-4 text-[#e5b528]" />
            <FaInstagramSquare className="text-3xl mt-2 mr-4 text-[#e5b528]" />
            <FaTwitterSquare className="text-3xl mt-2 mr-4 text-[#e5b528]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
