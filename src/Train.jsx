import React from 'react';

// مكون بطاقة المدرب القابل لإعادة الاستخدام
const TrainerCard = ({ name, course, comment, imageUrl }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
          <div className="sm:order-last sm:shrink-0">
            <img
              alt={name}
              src={imageUrl}
              className="size-12 rounded-full object-cover sm:size-16"
            />
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-700">{course}</p>
            <p className="mt-3 text-sm text-gray-700 line-clamp-2">
              {comment}
            </p>
          </div>
        </div>
        
        <div className="mt-3 flex justify-center">
          {[...Array(4)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      </a>
    </div>
  );
};

// مكون نجمة منفصل لإعادة الاستخدام
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-yellow-400">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
  </svg>
);

export default function Train() {
  const trainers = [
    {
      name: "محمود طه عمرو",
      course: "Flutter كورس",
      comment: "كورس مفيد جدا واتعلمت منه حاجات كتيرةوحقيقي ناس عندها خبرة كبيرة وبيعرفوا يوصلوا المعلومه بصوره سهله وبسيطه",
      imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    },
    {
      name: "شهد احمد محمد",
      course: "Front-end كورس",
      comment: "كورس مفيد جدا واتعلمت منه حاجات كتيرةوحقيقي ناس عندها خبرة كبيرة وبيعرفوا يوصلوا المعلومه بصوره سهله وبسيطه",
      imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    },
    {
      name: "مدرب آخر",
      course: "Front-end كورس",
      comment: "كورس مفيد جدا واتعلمت منه حاجات كتيرةوحقيقي ناس عندها خبرة كبيرة وبيعرفوا يوصلوا المعلومه بصوره سهله وبسيطه",
      imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    }
  ];

  return ( 
    <div className='py-8 px-4'>
      <h1 className="font-bold text-4xl text-blue-600 text-center mb-8">
        بعض آراء المدربين
      </h1>
     
      <div className="flex flex-wrap justify-center -mx-4">
        {trainers.map((trainer, index) => (
          <TrainerCard
            key={index}
            name={trainer.name}
            course={trainer.course}
            comment={trainer.comment}
            imageUrl={trainer.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
