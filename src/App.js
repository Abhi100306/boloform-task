import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import UsedBy from './Components/UsedBy';
import Work from './Components/Work';
import Review from './Components/Review';
import Features from './Components/Features';
import Banner from './Components/Banner';
import Workflow from './Components/Workflow';
import Award from './Components/Award';
import AwardCall from './Components/AwardCall';
import Customer from './Components/Customer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <UsedBy/>
      <Work/>
      <Review/>
      <Features/>
      <Review/>
      <Banner/>
      <Workflow/>
      <Review/>
      <Award/>
      <Customer/>
      <AwardCall/>
    </div>
  );
}

export default App;

