import React from 'react';
import { useParams } from 'react-router-dom';
import products from "./Assets/Date"; // Make sure this path is correct
import Price from './Price';
import ICONS from './ICONS';
import Accordion from './Accordion';
export default function ProductDetails() { // More descriptive component name
  const { id } = useParams();
  
  

  // Convert id to number if your product IDs are numeric
  const product = products.find(p => p.id === parseInt(id) );
  



  return (
    <div className="product-details">

<div>
   <h5 class="mb-2 text-3xl font-bold tracking-tight text-blue-700 dark:text-white"> كورس تعلم {product.title}</h5>
</div>
<div className='flex flex-col md:flex-col gap-5'>
      <div className='mt-3'>
        
 <a href="#" className="w-full flex flex-col justify-center items-center bg-white md:flex-row md:max-w-full ">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-60 md:w-1/4 "src={product.image2} alt={product.title}/>
    <div class="text-center mx-3 ">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white "> نبذة عن الدورة </h5>
        <p class="mb-3 font-extralight text-gray-700 dark:text-gray-400">{product.description}</p>
    </div>
</a>

      </div>
     





<div>
<ICONS></ICONS>
</div>


<div>
  <Accordion>
    
  </Accordion>
</div>



<div>
  <Price></Price>
</div>




<div>
  <article class="  bg-white ">
     
       <h5 class="mb-2 text-3xl font-bold tracking-tight text-blue-700 dark:text-white"> نبذه عن المدرب </h5>
  <div class="flex  justify-center  items-start gap-4 p-4 sm:p-6 lg:p-8">
   
    <a href="#" class="block shrink-0">
      <img
        alt=""
        src={product.image}
        class="size-14 rounded-lg object-cover"
      />
    </a>

    <div>
      <h1 class="font-medium sm:text-lg">
        <a href="#" class="hover:underline"> {product.name} </a>
      </h1>

      <p class="line-clamp-2 text-sm text-gray-700 my-4 fon">
       {product.name} مصمم محترف في واجهات افي مجال تصمميم واجهات التصميم مع اكثر من(3) سنوات خبرة بطريقه مبتكرة
      </p>

      
        <span class="hidden sm:block" aria-hidden="true">&middot;</span>

       
       
 
    </div>
  </div>

  
</article>
</div>





















</div>
    </div>
  );
}