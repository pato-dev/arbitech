import SectionHead from './SectionHead';
import { jobdone } from '../data';
import Card from '../UI/Card';
import { Link } from "react-router-dom";
import { AiFillCaretRight } from 'react-icons/ai'

const JobDone = () => {
    return (
        <section className="jobdone">
            <div className="container jobdone__container">
                <SectionHead title="Services" />
                <div className="jobdone__wrapper">
                    {
                        jobdone?.map(({ id, icon, title, info, path }) => {
                            return (
                                <Card className='jobdone__item' key={id}>
                                    <div className="jobdone__img">
                                        <img src={icon} alt='names' />
                                    </div>
                                    <h3>{title}</h3>
                                    <p className='cutoff_text'>{info}</p>
                                    <Link to={path} className="btn sm">Learn More <AiFillCaretRight /></Link>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default JobDone;