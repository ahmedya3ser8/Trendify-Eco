import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e] py-10">
      <div className="container">
        <div className="grid grid-cols-5 gap-14 text-white">
          <div className="col col-span-2 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Trendify</h3>
            <p className="text-gray-300 text-sm">Join Our newsletter to stay up to date on feautres and releases.</p>
            <div className="subscription flex items-center gap-2">
              <input type="text" className="w-full h-10 px-2 bg-white text-main outline-none rounded-lg border border-main" />
              <button className="h-10 px-4 bg-main text-white border border-white rounded-lg cursor-pointer">Subscribe</button>
            </div>
            <p className="text-gray-200 text-sm">By Subscribeing you agree to with our Privacy Policy and provide consent to receive updates from our company</p>
          </div>
          <div className="col">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer"> FAQ </li>
              <li>
                <Link to='/contact-us'> Contact </Link>
              </li>
              <li className="cursor-pointer"> Returns </li>
              <li>
                <Link to='/blog'> Blog </Link>
              </li>
              <li className="cursor-pointer"> Shipping </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer"> Affiliates </li>
              <li className="cursor-pointer"> Apply Pay Payments </li>
              <li className="cursor-pointer"> Returns </li>
              <li className="cursor-pointer"> Returns Policy </li>
              <li className="cursor-pointer"> Returns </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2 cursor-pointer"> <FaFacebook /> Facebook </li>
              <li className="flex items-center gap-2 cursor-pointer"> <FaInstagram /> Instagram </li>
              <li className="flex items-center gap-2 cursor-pointer"> <FaTwitter /> Twitter </li>
              <li className="flex items-center gap-2 cursor-pointer"> <FaLinkedin /> Linkedin </li>
            </ul>
          </div>
        </div>
        <div className="copyright flex justify-between items-center mt-8">
          <p className="text-gray-300">© 2025 Trendify. All right reserved</p>
          <ul className="flex items-center space-x-4">
            <li className="text-gray-400"> Privacy Policy </li>
            <li className="text-gray-400"> Terms of Services </li>
            <li className="text-gray-400"> Cookies Setting </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
