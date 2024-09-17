import React from 'react'
import Raisefloor from "../images/raise-floor.jpg"

const RaiseFloor = () => {
    return (
        <div className="bg-color">
            <div className="container row mid_scren">
                <div className="first__item">
                    <h2>RAISE FLOOR SYSTEM</h2>
                    <img src={Raisefloor} alt="" />
                </div>
                <div>
                    <div className="col">
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
        </div>
    )
}

export default RaiseFloor