const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-[1440px] mx-auto w-[95%] mt-12 items-center">
        <div className="grid grid-cols-4 gap-8">
          {/* Funiro Logo Section */}
          <div>
            <h1 className="text-xl font-bold">Funiro.</h1>
            <p className="mt-4 text-gray-500">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="font-semibold text-gray-800">Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="font-semibold text-gray-800">Help</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Payment Options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="font-semibold text-gray-800">Newsletter</h2>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-gray-500 text-center text-sm">
          2023 Funiro. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
