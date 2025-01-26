import Image from 'next/image';
import React from 'react'
import Slider from "react-slick"
import styles from './banner.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomArrowProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2"
    >
      ⬅️ {/* Mũi tên trái */}
    </button>
  );
  
  const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2"
    >
      ➡️ {/* Mũi tên phải */}
    </button>
  );
function Banner() {
    const settings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000, // Thời gian chờ 3 giây
        dots: true,
        infinite: true,
        speed: 1000, // Hiệu ứng chuyển 1 giây
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
            <Slider {...settings}>
                <div className={styles.banner_container}>
                    <div className={styles.banner_item}>
                        <Image alt="Example"
                            width={500}
                            height={0}
                            className='w-full h-full'
                            src={"https://images.unsplash.com/photo-1737555070365-cb948afc334c?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    </div>
                </div>
                <div className={styles.banner_container}>
                    <div className={styles.banner_item}>
                        <Image alt="Example"
                            width={500}
                            height={0}
                            className='w-full h-full'
                            src={"https://images.unsplash.com/photo-1737555070365-cb948afc334c?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    </div>
                </div>
            </Slider>
    );
}

export default Banner