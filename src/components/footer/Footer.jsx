import { Link } from 'react-router-dom';
// import Logo from '../../images/arbitech-logo.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import './footer.css';
import { MdEmail, MdPhone, MdAddBusiness } from 'react-icons/md';

const Footer = () => {
    return (
        <footer>
            <div className='container footer__container'>
                <article>
                    {/* <Link to="/" className="logo" >
                        <img src={Logo} alt="Footer Logo" />
                    </Link> */}
                    <h3>Arbitech Nigeria Limited</h3>
                    <p className='desc'>
                        At Arbitech Nigeria Limited every person in our company is a member of the team and team player. With the expectation and the need that they perform their duties to their fullest capacity and potential. The client satisfaction is our major focus. Reached through innovative and cost effective service delivery.</p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin /></a>
                        <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebookF /></a>
                        <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter /></a>
                        <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram /></a>
                    </div>
                </article>
                <article className='offices'>
                    <h4>Our Offices:</h4>
                    <div className='office'>
                        <p style={{ textDecoration: "underline" }}>Abuja Office:</p>
                        <p style={{ textAlign: "left" }}> <MdAddBusiness /> <span>Block B2 Flat3 Union Homes, Wilbahi Estate, Kukwaba District Abuja, Nigeria.</span></p>
                        <p><MdPhone /> <span>+234 810 3886 970</span></p>
                        <p><MdEmail /> <span>arbitechltd@hotmail.com</span></p>
                    </div>
                    <div className='office'>
                        <p style={{ textDecoration: "underline" }}>Lagos Office:</p>
                        <p style={{ textAlign: "left" }}><MdAddBusiness /><span>Block 28, Suite 30, LSDPC Housing Estate, Isolo Lagos, Nigeria.</span></p>
                        <p><MdPhone /> <span>+234 803 7192 999 / +234 802 2906 992</span></p>
                        <p><MdEmail /><span>arbitechltd@hotmail.com</span></p>
                    </div>
                </article>
                <article className='perma__links'>
                    <h4>Permalinks</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>{new Date().getFullYear()} ARBITECH NIGERIA LIMITED &copy; All Right Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer