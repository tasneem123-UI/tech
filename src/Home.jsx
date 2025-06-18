import React from 'react'
import logo from "./Assets/hero_bg.png"
export default function Home() {
  return (
    <div>
      <img src={logo} alt="" style={{width:"100%",height:"50vh"}}  className=''/>
      <div className='hometitle'>
    <h1  className=' font-[1000]' > ! ابدأ الرحله صح </h1>


    <p className='  font-[300] my-5 ' >ابدا تعلم مع +200 فيديو مقدمه من افضل المدربين في مختلف المجالات
        <br></br>
         او تبدا مشروعك مع خدمات High Tech المميزه </p>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-colo  xl:flex-row justify-center gap-4 icon">
          <a
            className="  bg-green-600 inline-flex items-center justify-center rounded-xl border-2 border-blue-900 px-8 py-3 text-sm font-medium transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px] text-center"
            href="#"
          >
            ابدأ مشروعك
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[200px] text-center"
            href="#"
          >
            ابدأ تعلّم
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            مشاهدة فيديو
          </a>
        </div>
      </div>
    </div>
  )
}
