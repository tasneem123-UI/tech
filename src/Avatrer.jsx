import React from 'react';

export default function Avatar() {
  const trainers = [
    {
      name: "مينا عماد",
      role: "الامن السيبراني",
      image: require("./Assets/mina.png")
    },
  {
      name: "جون محسن",
      role: "مبرمج UI/UX",
      image: require("./Assets/john.png")
    },
    {
      name: "عبدالرحمن زغلول",
      role: "مبرمج Front-end",
      image: require("./Assets/abd_ulrahman.png")
    },
    {
      name: "انجليوس رزق",
      role: "مبرمج Flutter",
      image: require("./Assets/angelious.png")
    },
    {
      name: "جون محسن",
      role: "مبرمج UI/UX",
      image: require("./Assets/john.png")
    }
  ];

  return (
    <div className="p-4">
      <h1 className="font-bold text-4xl text-blue-600 text-center mb-8">
        تعرف على مدربينا
      </h1>
      
      <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
        {trainers.map((trainer, index) => (
          <div key={index} className="flex items-center gap-4 w-full max-w-xs p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <img 
              src={trainer.image} 
              alt={trainer.name} 
              className="w-20 h-20 rounded-full bg-gray-100 object-cover" 
            />
            <div>
              <a href="#" className="text-xl font-semibold text-gray-900 hover:text-blue-600 block">
                {trainer.name}
              </a>
              <p className="text-gray-600 font-bold mt-1">
                {trainer.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}