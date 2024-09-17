import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Ups from './components/Ups';
import CPMS from './components/CPMS';
import FireSystem from './components/FireSystem';
import RaiseFloor from './components/RaiseFloor';
import SecurityDoor from './components/SecurityDoor';

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='services/ups' element={<Ups />} />
            <Route path='services/cpms' element={<CPMS />} />
            <Route path='services/fire-systems' element={<FireSystem />} />
            <Route path='services/raise-floor' element={<RaiseFloor />} />
            <Route path='services/security-doors' element={<SecurityDoor />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)
export default App