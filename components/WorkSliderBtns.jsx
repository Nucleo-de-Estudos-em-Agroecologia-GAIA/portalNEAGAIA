"use client";

import { useSwiper } from "swiper/react";
import { PiArrowLeft, PiArrowRight} from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={btnStyles}>
                <PiArrowLeft className={iconsStyles} onClick={()=>swiper.slidePrev()}/>
            </button>
            <button className={btnStyles}>
                <PiArrowRight className={iconsStyles}  onClick={()=>swiper.slideNext()}/>
            </button>
        </div>
    );
};

export default WorkSliderBtns;