import React from 'react';

export default function Footer() {
  return (
    <div className="relative ">
      {/* Background Image */}

       <div className='bg-yellow-600 p-4 text-center w-1/3 h-40 mx-auto rounded-xl footer'>
        <h1 className=" font-bold text-white">
          اشترك الآن واحصل على خصم 40% على جميع الباقات
        </h1>
        <button className="mt-3 bg-white text-yellow-400 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
          اشترك الآن
        </button>
      </div>
      <img 
        src={require("./Assets/footer_bg.png")} 
        alt="Footer background" 
        className="w-full h-40 object-cover v"
      />
      
      {/* Yellow Banner */}
     
      
      {/* Footer Content (add more sections as needed) */}
      
    </div>
  );
}