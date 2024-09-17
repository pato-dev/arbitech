import React, { useState } from 'react'
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import Tollgate from "../images/tollgate-cpms.jpg"
import Cpms from "../images/cpms-hilton1.jpg"
import { cpms_testimonials } from "../data";
import Card from '../UI/Card';

const CPMS = () => {
  const [index, setIndex] = useState(0);
  const { name, avatar } = cpms_testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex(prev => prev - 1);
    if (index <= 0) {
      setIndex(cpms_testimonials.length - 1)
    }
  }
  const nextTestimonialHandler = () => {
    setIndex(prev => prev + 1);
    if (index >= cpms_testimonials.length - 1) {
      setIndex(0)
    }
  }
  return (
    <div className="bg-color">
      <div className="container">
        <h2> <center style={{ marginBottom: "1rem" }}>Parking Management System (PMS)</center></h2>
        <div className="row  mid_scren">
          <div className='col'>
            <img src={Tollgate} className='pms_img' alt="tollgate" />
            <h3>1: ELECTRONIC TOLL GATE MANAGEMNT SYSTEM (ETMS)</h3>
            <p>Key Features of the Electronic Tolling Management System:</p>
            <ul>
              <li> - Easy and speedy vehicle movement in and out of the toll gate.</li>
              <li> - Retains past payment details for future use.</li>
              <li> - Reduceing time cars speed at the toll gate.</li>
              <li> - Monthly purge facility to reduce searching on unwanted records.</li>
              <li> - Generate shift, daily, weekly, monthly and annual reports for auditing.</li>
            </ul>
            <h4>System Configuration:</h4>
            <p>The "ETMS" consists of the following:</p>
            <ul>
              <li> - The Central control unit (Database).</li>
              <li> - The field units-Barriers and cash desk.</li>
            </ul>
            <h4>System Package:</h4>
            <p>The software packages include the following:</p>
            <ul>
              <li> - Software for integration of several equipment/accessories to operate together such as printer, electronic display, electronic barriers etc.</li>
              <li> - Software that enables report to be generated using a wide range of user defined parameters.</li>
              <li> - Software for counting of vehicles and generate financial reports based on the number of vehicles counted.</li>
            </ul>
            <h4>Mode of Operation:</h4>
            <ul>
              <li> - Once a vehicle is at the cash boot the presence loop is activated, this alerts the attendance that a motorist wants to access the toll gate.</li>
              <li> - The attendance is expected to collect the toll fare, which is a flat rate, on collecting the fare from the motorist, he/she is expected to give the motorist a receipt for the fare from the POS receipt number.</li>
              <li> - After the exchange of the money and receipt by the toll attendance and the motorist, the attendance will press the barrier control to switch on the desk this will automatically open the barrier for the motorist to go.</li>
              <li> - Once the car crosses the barrier, the barrier closes and the system software records this in
                numerical figure. The closing of the barrier is effected by an underground magnetic loop.</li>
              <li> - Each attendance at the start of a shift will log into the system with his/her shift No. and password and at the close of the shift will also log out. On logging out the system prints the report for that shift.</li>
              <li> - Information on the closing report includes:
                <ul>
                  <li>• Attendance name,</li>
                  <li>• Shift number</li>
                  <li>• Lane number</li>
                  <li>• Date and time when shift was open</li>
                  <li>• Date and time when shift close</li>
                  <li>• Total number of cars that passed the lane for that shift</li>
                  <li>• The above information when submitted will be crossed checked with the cash. For example, if the fare is 100 Naira per car and the report has a total of 1000 cars, then the total sum of that shift will be 100,000 Naira.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='col'>
            <img src={Cpms} className='pms_img' alt="cpms" />
            <h3>2: CAR PARK MANAGEMENT SYSTEM (CPMS)</h3>
            <p>The Car Park Management System “CPMS” is a system comprises of electric, mechanical and electronic devices put together to ease vehicular movement in and out of a facility for example shopping mall, hotel, or office complex, cinema, parking lots, residential complex. Etc.</p>
            <h4>Mode of Operation:</h4>
            <p>I: Casual Parkers/Visitors/Short term Users:</p>
            <ul>
              <li> -	On entry to the complex, the visitor will collect a ticket from the ticket dispensing machine by pressing a requesting button. This shall take approximately one second. When the ticket is picked from the ticket machine, the barrier will open automatically to allow access.</li>
              <li> -	When leaving the premises, the casual user will validate the ticket with the POS system, the attendant at the POS station will read the ticket for payment.</li>
              <li> -	After the transaction at the POS station, the parker takes the ticket and proceeds to the exit. The exit machine reads the ticket and confirm from the controller before the exit barrier is authorized to open thus allowing the user to exit.</li>
            </ul>
            <p>II: Paid Member Cards/Season Parkers/Long term Users:</p>
            <ul>
              <li> -	This category will operate both the entry and exit barriers using their cards. The card readers at the entry and exit shall validate each card, open the barriers. A card used for entry must first be used for exit before it is re-used for entry again. This anti pass back feature prevents fraudulent misuse of the staff card.</li>
              <li> -	At every point data is captured and stored in the management server(Database).</li>
            </ul>
            <h4>The Benefits of Automation:</h4>
            <ul>
              <li> - Enhance park security and sustain service standards.</li>
              <li> - With automation, the records are easier to maintain and therefore it is much easier to manage incidents and parking area security. This in association with the survelliance pictures, which can be tagged to the database from a very powerful security tool.</li>
            </ul>
            <h4>Managenent and Marketing Information:</h4>
            <ul>
              <li> - From its operations, the system shall be able to generate a broad range of reports which management may use to the needs of the customers.</li>
              <li> - From these reports, it shall be possible to tell following:
                <ul>
                  <li> • Statistic on number of vehicles entry or exiting the fscility by time.</li>
                  <li> • Statictics duration.</li>
                  <li> • Incident reports for specific vehicle.</li>
                  <li> • Reports on number of vehicles staying overnight or excessively ling and others.</li>
                  <li> • Futhermore, with the use of automatic license plate recognition, specific reports such as the following can be made available:
                    <ul>
                      <li> - Number plates of vehicle that have overstayed the parking areas.</li>
                      <li> - Frequency of visits of a particular vehicle.</li>
                      <li> - Alert raised during attempted entry / exit of marked number plates.</li>
                      <li> - Vehicle theft prevention.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <section className="testimonials">
          <div className="testimonials__container">
            <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials__head" />
            <Card className='testimonial'>
              <img src={avatar} alt={name} />
              <h5>{name}</h5>
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
    </div>
  )
}

export default CPMS