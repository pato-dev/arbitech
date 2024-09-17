import React, { useState } from 'react'
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { door_testimonials } from "../data";
import Card from '../UI/Card';
import Image1 from "../images/Design-residential-security-door_mix_match-series.jpg"

const SecurityDoor = () => {
    const [index, setIndex] = useState(0);
    const { name, avatar } = door_testimonials[index];

    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);
        if (index <= 0) {
            setIndex(door_testimonials.length - 1)
        }
    }
    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);
        if (index >= door_testimonials.length - 1) {
            setIndex(0)
        }
    }
    return (
        <div className='bg-color'>
            <div className="container row mid_scren">
                <div className="first__item">
                    <h2>SECURITY DOOR</h2>
                    <img src={Image1} alt="" />
                </div>
                <div className='second__item'>
                    <div className="col">
                        <h3>Laminate Doors.</h3>
                        <p>Laminate doorss crafted from HDF or MDF, prioritize customers by providing an array of customizable styles that blend affordability with durability.</p>
                        <p>Their wrap-resistant composition ensures long-lasting value, appealing to budget-concious homeowners wwho seek both practicality and aesthetic cohesion within their living spaces.</p>
                    </div>
                    <div className="col">
                        <h3>Security Doors.</h3>
                        <p>Security doors stand as fortified sentinels, shielding homes and businesses from potential threats. With robust materials and advanced locking mechanissms, these doors serve as an unwavering defense, deterring intrusions and providing peace of mind.</p>
                        <p> In an uncertain world, security doors stand resolute, offering protection without compromise.</p>
                    </div>
                    <div className="col">
                        <h3>Fire-Exit Doors.</h3>
                        <p>Fire exit doors stand as crutial lifelines in emergencies, enabling swift and safe evacuation.</p>
                        <p>Engineered with fire-resistant materials and intuitive hardware, these doors ensure a reliable escape route when every second counts.</p>
                        <p>From crowded public spaces to provate residences, fire-exit doors symbolize preparedness and prioritize life-saving measures,underscoring their indispensable role in safeguarding lives.</p>
                    </div>
                </div>
            </div>
            <section className="testimonials">
                <div className="testimonials__container">
                    <SectionHead icon={<ImQuotesLeft />} title="Doors" className="testimonials__head" />
                    <Card className='testimonial'>
                        <img src={avatar} alt={name} />
                        <p>{name}</p>
                    </Card>
                    <div className="testimonials__btn-container">
                        <button className="testimonials__btn" onClick={prevTestimonialHandler}>
                            <IoIosArrowDropleftCircle />
                        </button>
                        <button className="testimonials__btn" onClick={nextTestimonialHandler}>
                            <IoIosArrowDroprightCircle />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default SecurityDoor