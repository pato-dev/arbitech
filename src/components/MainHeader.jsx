import { Link } from 'react-router-dom';
import Image from '../images/profile_arbitech.jpg';
const MainHeader = () => {
  return (
    <div className="container ">
      <div className="main_header">
        <div className="main_header-text">
          <h1>ARBITECH NIGERIA LIMITED</h1>
          <h3>#001 leading Car Park Automation and Power Solution provider in Nigeria...
          </h3>
          <p>With client satisfaction as our major focus reached through innovative and cost effective service delivery, we have a team of factory-trained engineers which provides installation and maintenance for our range of products in Nigeria.
          </p>
          <p>Since the establishment of Arbitech Nigeria Limited years ago, we have successfully completed various projects for our clients across various sectors of the economy ranging from households, private companies to government institutions.</p>
          <Link to='/contact' className='btn lg'>Enquiries</Link>
        </div>
        <div class="main_header-img">
          <img src={Image} alt="profile_image" />
        </div>
      </div>
    </div>
  )
}

export default MainHeader