import React from 'react'
import FireSystemCylinder from "../images/fire-system-cylinder2.jpg"

const FireSystem = () => {
    return (
        <div className="bg-color">
            <div className="container row mid_scren">
                <div className="first__item">
                    <p style={{ marginBottom: "1rem" }}><center>FIRE SUPPRESSION SYSTEMS</center></p>
                    <h2>FM-200 FIRE SUPPRESSION SYSTEMS</h2>
                    <img src={FireSystemCylinder} alt="" />
                </div>
                <div>
                    <div className="col">
                        <p>Electrically non-conductive,FM-200 works by removing heat from a fire so that combustion cannot be sustained. when it comes to being safe for use, FM-200 delivers, which is why FM-200 systems are approved by FM and UL listed: an ideal solution where personnel safety and process continuity are paramount.
                            The decision to use FM-200 can be based on a number of key factors it is the most widely used of the chemical replacements for Halon 1301 and it is an agent that has been used to successfully protect tens of thousands of high-technology facilities in 70 countries around the world.                    At its design concentration. FM-200 does not sufficiently deplete the oxygen level to a point where it is unsafe for occupants to remain in the room.
                            FM-200 agent is stored in cylinder as a liquid, super-pressurised with nitrogen so requiring only a very small storage  ‘footprint’.                                                                                                                                    The  discharged gas flows through a piping network into the protected area where it is applied to suppress the fire through heat absorption.                                                                                                   Significantly, there is no risk of thermal shock to delicate electronic equipment and FM-200 is electrically non-conductive and non-corrosive.
                            Additionally, it leaves no oily residues or deposits to damage software, data files or communications equipment, meaning post-discharge clean up time and costs are minimal. Its use as a fire suppressant is not inhibited by the Montreal protocol. Indeed, it is a clean agent that belongs to a     class of compounds that was introduced specifically to facilitate the phase-out of ozone depleting gases, such as Halon 1301.                                                                                                                         Extensively tested, FM-200 systems are proven safe for use in occupied areas. They are designed using bespoke software, which accurately calculates the amount of FM-200 required for the protected space. The target concentration of FM-200 in an identified protected volume is matched to international standards, which themselves are result of extensive and repeated fire tests, to match design to fire protection performance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FireSystem