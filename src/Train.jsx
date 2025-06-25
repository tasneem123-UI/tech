import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrainerReviewsSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    rtl: true, // Right-to-left for Arabic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const trainers = [
    {
      id: 1,
      name: "شهاب أحمد محمد",
      course: "تطوير الواجهات الأمامية",
      review: "كورس ممتاز ساعدني في تطوير مهاراتي بشكل كبير",
      rating: 5,
      image: require("./Assets/john.png")
    },
    {
      id: 2,
      name: "محمد علي حسين",
      course: "برمجة Flutter",
      review: "المحتوى غني بالمعلومات والأمثلة العملية",
      rating: 4,
      image: require("./Assets/john.png")
    },
    {
      id: 3,
      name: "نور خالد",
      course: "تطوير تطبيقات iOS",
      review: "شرح واضح وشامل للمبتدئين والمتقدمين",
      rating: 5,
      image: require("./Assets/john.png")
    },
    {
      id: 4,
      name: "أحمد سمير",
      course: "أمن المعلومات",
      review: "أفضل استثمار قمت به في تطوير مسيرتي المهنية",
      rating: 5,
      image: require("./Assets/john.png")
    },
    {
      id: 5,
      name: "ليلى مصطفى",
      course: "تعلم الآلة",
      review: "المدرب خبير في المجال وشرحه مميز",
      rating: 4,
      image: require("./Assets/john.png")
    },
    {
      id: 6,
      name: "يوسف عمر",
      course: "تحليل البيانات",
      review: "الكورس غير طريقة عملي في تحليل البيانات",
      rating: 5,
      image: require("./Assets/john.png")
    },
    {
      id: 7,
      name: "سامر ناصر",
      course: "التسويق الرقمي",
      review: "محتوى عملي يمكن تطبيقه مباشرة",
      rating: 4,
      image: require("./Assets/john.png")
    },
    {
      id: 8,
      name: "خالد وليد",
      course: "إدارة المشاريع",
      review: "زاد من كفاءتي في إدارة الفرق والمشاريع",
      rating: 5,
      image: require("./Assets/abd_ulrahman.png")
    },
    {
      id: 9,
      name: "رايم عبدالرحمن",
      course: "التصميم الجرافيكي",
      review: "تعلمت أدوات ومهارات جديدة ساعدتني في عملي",
      rating: 5,
      image: require("./Assets/mina.png")
    },
    {
      id: 10,
      name: "فارس نادر",
      course: "برمجة الألعاب",
      review: "تجربة رائعة مع مدرب متمكن وخبير",
      rating: 5,
      image: require("./Assets/john.png")
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < rating ? "currentColor" : "none"}
        stroke="currentColor"
        className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ));
  };

  return (
    <div className="py-12 px-4 bg-gray-50" dir="rtl">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">آراء المتدربين عن المدربين</h1>
      
      <div className="slider-container mx-auto max-w-7xl">
        <Slider {...settings}>
          {trainers.map((trainer) => (
            <div key={trainer.id} className="px-3">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="flex items-center mb-4 ">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 mx-4"
                  />
                  <div className="mr-3">
                    <h3 className="text-xl font-bold text-gray-800">{trainer.name}</h3>
                    <h4 className="text-md text-blue-600">{trainer.course}</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{trainer.review}</p>
                <div className="flex justify-center mt-auto">
                  <div className="flex">{renderStars(trainer.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TrainerReviewsSlider;
