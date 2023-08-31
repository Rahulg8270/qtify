import React, { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import styles from './Carousel.module.css'
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation'

const Controls = ({data}) => {
    let swiper = useSwiper();
    console.log(swiper)
    useEffect(() => {
        // swiper.slideTo(0)
    },[data])

    return <></>
}

const Carousel = ({data,renderCardComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper initialSlide = {0} modules={{Navigation}} slidesPerView={'auto'} spaceBetween={40} allowTouchMove>
            <Controls data={data} />
            <CarouselLeftNavigation />
            <CarouselRightNavigation />
            {data.map(item => (
                <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel