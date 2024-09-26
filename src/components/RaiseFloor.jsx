import React, { useState } from 'react'
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { raise_floors } from "../data";
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import Raisefloor from "../images/raise-floor.jpg"

const RaiseFloor = () => {
    const [index, setIndex] = useState(0);
    const { name, avatar } = raise_floors[index];

    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);
        if (index <= 0) {
            setIndex(raise_floors.length - 1)
        }
    }
    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);
        if (index >= raise_floors.length - 1) {
            setIndex(0)
        }
    }
    return (
        <div className="bg-color">
            <div className="container row mid_scren">
                <div className="col about__col">
                    <h2>RAISE FLOOR SYSTEM</h2>
                    <img src={Raisefloor} alt="" />
                </div>
                <div className="col about__col">
                    <div>
                        <center><h2>Mero Raised-flooring System (Italy)</h2></center>
                        <h3>MERO access floor is used for:</h3>
                        <ul>
                            <li> - Office areas with low traffic.</li>
                            <li> - Standard office areas.</li>
                            <li> - Areas with required static loads as Lecture and Assembly halls, Meeting rooms, Surgeries and Tratment rooms, Construction Offices.</li>
                            <li> - Storage spaces, work-shops with light operation or libraries as industrial floor.</li>
                            <li> - Computer centres / Server rooms.</li>
                        </ul>
                        <p>The access floor is available in different types and systems to meet the requirements of the user.</p>
                        <h4>Advantages:</h4>
                        <ul>
                            <li>High flexibility.</li>
                            <li>Easy installation of additional equipment and supply lines.</li>
                            <li>Variables construction heights, more than 1,000mm on request.</li>
                            <li>Huge installation plenum.</li>
                            <li>Easy handling of the panel material.</li>
                            <li>Good fire protection properties.</li>
                            <li>Good sound absorption values.</li>
                            <li>Suitable for the application of various floor coverings.</li>
                            <li></li>
                        </ul>
                        <p>Arbitech Nigeria Limited is a sole distributor of Mero (Italy) Raise-floor System in Nigeria.</p>
                    </div>
                </div>
            </div>
            <section className="testimonials">
                <div className="testimonials__container">
                    <SectionHead icon={<ImQuotesLeft />} title="Raise Floor System" className="testimonials__head" />
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
                    <Link to='/' className='btn sm' style={{ display: "flex", marginTop: ".5rem" }}>Back</Link>
                </div>
            </section>
        </div>
    )
}

export default RaiseFloor