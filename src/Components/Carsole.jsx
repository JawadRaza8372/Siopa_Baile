import React from 'react'
import {Carousel} from "react-bootstrap";
function Carsole() {
    return (
        <>
            <Carousel fade indicators={false} controls={false}>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
        </>
    )
}
function Carsole2({data}) {
  return (
          <Carousel fade indicators={false} controls={false}>
          {data && data.map((dt,index)=>(
            <Carousel.Item interval={3000}>
  <img
    style={{objectFit:"contain",maxHeight:"500px",width:"100%"}}

    src={dt}
    alt="First slide"
  />
</Carousel.Item>
          ))

          }


</Carousel>
      
  )
}
export default Carsole
export {Carsole2}
