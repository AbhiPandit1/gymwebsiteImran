'use client';

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
}) => {
    const swiper =useSwiper()
  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnStyles}`} onClick={()=>swiper.slidePrev()}>
        <PiCaretLeftBold className={`${iconsStyles}`} />
      </button>
      <button className={`${btnStyles}`}>
        <PiCaretRightBold className={`${iconsStyles}`} onClick={()=>swiper.slideNext()}/>
      </button>
    </div>
  );
};

export default SwiperNavButtons;