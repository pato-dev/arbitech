import Header from '../../components/Header';
import HeaderImage from '../../images/arbitech-profile1.jpg';
import StoryImage from '../../images/door1-security_mix_match-series.jpg';
import VisionImage from '../../images/rolls-royce.jpg';
import MissionImage from '../../images/car-park-tollgate-cpms.jpg';
import './about.css';

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                The Solutions offered by Arbitech Nigeria Limited...
                <ul>
                    <li> - Heavy Industrial Infrastructure and Utilities.</li>
                    <li> - Commercial Buildings.</li>
                    <li> - Industrial Car Parks and Toll Gate Systems.</li>
                    <li> - Renewable Energy.</li>
                </ul>
            </Header>
            <section className="section-three">
                <div className="container row">
                    <div className="col">
                        <h2 className="section-title">Our Values</h2>
                        <p className='col_p'>
                            <p>Innovation.</p>
                            <p> Prompt Service Response.</p>
                            <p>Customer First.</p>
                            <p>Power Quality and LEAN Excellence.</p>
                        </p>
                    </div>
                    <div className="col col_img">
                        <img src={StoryImage} alt="Our Story img" />
                    </div>
                </div>
            </section>

            <section className="section-four">
                <div className="container row">
                    <div className="col col_img">
                        <img src={VisionImage} alt="Our Vision img" />
                    </div>
                    <div className="col">
                        <h2 className="section-title">Our Vision</h2>
                        <p>To be the leading Car Park Automation and Power Solution provider in Nigeria and West Africa with a highly trained and efficient team of Enginners and customer service personnel.</p>
                    </div>
                </div>
            </section>
            <section className="section-three">
                <div className="container row">
                    <div className="col">
                        <h2 className="section-title">Our Mission</h2>
                        <p>Our mission is to provide quality power solutions and car park automation solution that creates winning business for our customers, save energy and protect the environment.</p>
                    </div>
                    <div className="col col_img">
                        <img src={MissionImage} alt="Our Mission img" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default About