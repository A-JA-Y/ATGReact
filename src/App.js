
import './App.css';
import Section1 from './components/Section1/section1';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Cards from './components/section2/section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Section5 from './components/section5/section5';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section1/>
      <Cards/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  );
}

export default App;
