import Header from '../../components/Header';
import HeaderImage from '../../images/Doc3.jpg';
import StoryImage from '../../images/Design-residential-security-door_mix_match-series.jpg';
import VisionImage from '../../images/rolls-royce.jpg';
import MissionImage from '../../images/tollgate-cpms.jpg';
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
            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Our Story img" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Values</h1>
                        <p>Innovation.</p>
                        <p> Prompt Service Response.</p>
                        <p>Customer First.</p>
                        <p>Power Quality and LEAN Excellence.</p>
                    </div>
                </div>
            </section>
            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>To be the leading Car Park Automation and Power Solution provider in Nigeria and West Africa with a highly trained and efficient team of Enginners and customer service personnel.</p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="Our Vision img" />
                    </div>
                </div>
            </section>
            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Our Mission img" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>Our mission is to provide quality power solutions and car park automation solution that creates winning business for our customers, save energy and protect the environment.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About