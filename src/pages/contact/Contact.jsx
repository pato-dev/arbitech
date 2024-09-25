import Header from '../../components/Header';
import HeaderImage from '../../images/arbitech-profile1.jpg';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import "./contact.css"
const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        <p>Weather you are seeking energy efficiency, security,or convenience we are here to exceed your expectations.</p>
        <p>Contact us now to explore how we can transform your energy needs and enhance your parking experience.</p>
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:arbitechltd@hotmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
            <a href="http://wa.me/+2348103886970" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact