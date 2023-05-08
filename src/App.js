// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experiences } from './components/Experiences';
import { FloatButton } from 'antd';
import { ArrowUpShort } from 'react-bootstrap-icons';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    var floatButton = document.querySelector(".float-button");
    floatButton.style.display = 'none';
    const onScroll = () => {
      if (window.scrollY > 50) {
        floatButton.style.display = 'block';
      } else {
        floatButton.style.display = 'none';
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
      <FloatButton className='float-button' icon={<ArrowUpShort style={{ fontSize: 40, marginLeft: -10, }} className='icon-float-button' />} style={{ right: 40, bottom: 40, backgroundColor: '#64ffda', width: '50px', height: '50px' }} onClick={scrollToTop} />
    </div>
  );
}

export default App;
