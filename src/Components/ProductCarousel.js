import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';
import { MyCard } from './MyCard';
  
  SwiperCore.use([Pagination,Navigation]);
  
export const ProductCarousel = ({data}) => {
    return (
        <><div style={{display:"flex",justifyContent:"space-between",overflowX:"auto"}}>

        {data && data.map((dt)=>(<>
    <MyCard productName="product" imgurl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"/>
</>
))

}
  </div>
        </>
    )
}
