import React, { useEffect, useState } from 'react'
import { imageSlides } from '../data';
import Card from '../UI/Card';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const prevTestimonialHandler = () => {
        setCurrentIndex(prev => prev - 1);
        if (currentIndex <= 0) setCurrentIndex(imageSlides.length - 1)
    }
    const nextTestimonialHandler = () => {
        setCurrentIndex(prev => prev + 1);
        if (currentIndex >= imageSlides.length - 1) setCurrentIndex(0)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlides.length);
        }, 3000); // Change image every 5 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [isHovered]);
    return (
        <section className="image_slider_header"
            onMouseEnter={() => setIsHovered(true)}  // Stop sliding on hover
            onMouseLeave={() => setIsHovered(false)}>
            <Card className="image_slider_card">
                <img src={imageSlides[currentIndex].image} alt={`Slide ${currentIndex}`} />
                <div className='image_slide_btn'>
                    <button className="" onClick={prevTestimonialHandler}>
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button className="right" onClick={nextTestimonialHandler}>
                        <IoIosArrowDroprightCircle />
                    </button>
                </div>
            </Card>
        </section>
    )
}
export default ImageSlider