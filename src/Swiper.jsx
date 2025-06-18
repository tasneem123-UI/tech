import React from 'react'
import logo from"./Assets/itida.png"
import logo2 from"./Assets/Creativa.png"
import img1 from "./Assets/cource_img_1.png"
import img2 from "./Assets/cource_img_2.png"
import img3 from "./Assets/cource_img_3.png"
import img4 from "./Assets/cource_img_rounded.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';


export default function Swipers() {
  return (
    <div className=' flex flex-col gap-7 md:flex-col    xl:flex-row  justify-around swiperr '>
 




           <div>
        <h1  className=" font-[1000]  text-4xl text-blue-600 font-semibold">الشهادات التي نمنحها</h1>
        <p className=" font-[1000]  text-2xl text-gray-600 mt-9 font-medium">  في عصر التحول الرقمي والتطور التكنولوجي المتسارع
            <br></br> أصبحت الأكاديميات الإلكترونية منصات لا غنى عنها 
            لاكتساب المعرفة وتطوير المهارات<br></br>
           . تقدم هذه الأكاديميات حلولاً تعليمية مرنة تلبي احتياجات مختلف الفئات في ظل الثورة الصناعية الرابعة</p>
           <div className='flex justify-evenly my-9'>
<img src={logo} alt="شعار الأكاديمية" style={{ width: '100px', height: '100px' }} />
<img src={logo2} alt="شعار ثانوي" style={{ width: '100px', height: '100px' }} />
           </div>
      </div>

    


















<div className='"mx-10" dir="rtl'>   
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" className='image' /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
      </Swiper></div>






    </div>
  )
}
