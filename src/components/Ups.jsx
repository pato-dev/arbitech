import React from 'react'
import Image1 from "../images/ups-riello.jpg"
const Ups = () => {
    return (
        <div className="bg-color">
            <div className="container row mid_scren">
                <div className="first__item">
                    <h2>POWER SYSTEM</h2>
                    <img src={Image1} alt="" />
                </div>
                <div>
                    <div className="col">
                        <h3>Rotary UPS</h3>
                        <p>Arbitech in partnership with HITZINGER GMbH Austria are providing tailored power solution of rotating electrical machines for Nigeria market. This power solution covers five product lines:</p>
                        <ul>
                            <li> - Dynamic Diesel Rotary UPS Systems</li>
                            <li> - Standby Diesel Generating Sets</li>
                            <li> - Airport Equipment such as frequency converts</li>
                            <li> - Alternators and converts</li>
                            <li> - Ground Power Units</li>
                        </ul>
                        <p>Hitzinger is the manufacturer of Dynamic Diesel UPS System with 20 years experience, supporting critical loads including Data center, semi conductor Chip fabrications.</p>
                    </div>
                    <div className="col">
                        <h3>Static UPS</h3>
                        <p>Arbitech Nigeria Limited in collaboration with RIELLO(ITALY) and MUST (CHINA) as the supplier for backup and regulatory power supply equipment power supply equipment for computer rooms, ATMS, Communication equipment etc. Also RIELLO (ITALY) also supply industrial rectifiers. We have a team of factory trained engineers and we provide installation and maintenance for the following range of products.</p>
                        <ul>
                            <li> - 1-10KVA UPS’, I/O 1 Phase</li>
                            <li> - 10-40KVA UPS’, I/O 3 Phase or 1:3 Phase o: 1 Phase</li>
                            <li> - 60-800KVA Inverters I/O 3 Phase</li>
                            <li> - 3KVA – 20KVA Inverters I/O 1 Phase  (Solar and Power grid)</li>
                            <li> - 70KVA -800KVA Inverter I/O 3 Phase  (Solar and Power grid)</li>
                        </ul>
                        <p> Arbitech Nigeria Limited in collaboration with ORTEA (ITALY) and STAVOL. As the supplier for their Stabilizer/Automatic Voltage Regulators.</p>
                        <p>We have a team of factory-trained engineers and we provide installation and maintenance for the following range of products:</p>
                        <ul>
                            <li> - VEGA 0.3KVA -25KVA, I/O 1 Phase</li>
                            <li> - ANTARES 15KVA – 135KVA, I/O 1 Phase</li>
                            <li> - ORION 2 – 25OKVA, I/O 3 Phases</li>
                            <li> - ORION PLUS 60 – 6000KVA, I/O 3 Phases</li>
                            <li> - SIRIUS ADVANCE 60 – 4000KVA, I/O 3 Phases</li>
                        </ul>
                        <p>All our above products supplied with 12 months warranty period and we provide very good after sale support.</p>
                        <p>Batteries back up time calculated accordingly to the load requirement as per your specification.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ups