import Header from "./utils/components/Header/Header";
import Hero from "./utils/components/Hero/Hero";
import Companies from "./utils/components/Companies/Companies";
import Residencies from "./utils/components/Residencies/Residencies";
import Value from "./utils/components/Value/Value";
import './App.css'
import Contact from "./utils/components/Contact/Contact";
import GetStarted from "./utils/components/GetStarted/GetStarted";
import Footer from "./utils/components/Footer/Footer";
function App() {
  return (
 <div className="App">
  <div>
    <div className="white-gradient"/>

   <Header />
   <Hero />
   </div>
    <Companies />
   
 <Residencies />

 <Value />
     <Contact/>
   <GetStarted/>
   <Footer/>
 </div>
  );
}

export default App;
