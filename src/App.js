import React from 'react';
import photo from './photos/chicha.jpg';
import './App.css';
import PersoDet from './personalInfo';
import TitleLeft from './TitleLeft';
import Skill from './skill';
import Presentation from './presentation';
import TitleRight from './TitleRight';
import Period from './period';



// the completed page
function App() {
  return (
    <div className="App">
      <div className="leftPart">
        <h2> Wissem Ksentini</h2>
        <h4> FrontEnd Developper</h4>
        <img src = {photo} alt="logo" className="photo"/>
        <TitleLeft title="Personal Info"></TitleLeft>
        <PersoDet title="Adress" description='Marsa'></PersoDet>
        <PersoDet title="Phone" description='+21653326216'></PersoDet>
        <PersoDet title="Email" description='wissem.ksentini@gmail.com'></PersoDet>
        <PersoDet title="Date of Birth" description='14.03.1993'></PersoDet>
        <PersoDet title="GitHub" description='../0wissem'></PersoDet>
        <TitleLeft title="Skills"></TitleLeft>
        <div className="allSkills">
        <Skill title="HTML" pourcentage="60%"></Skill>
        <Skill title="CSS" pourcentage="60%"></Skill>
        <Skill title="JavaScript" pourcentage="70%"></Skill>
        <Skill title="jQuery" pourcentage="65%"></Skill>
        <Skill title="Reactjs" pourcentage="40%"></Skill>
        <Skill title="Python" pourcentage="50%"></Skill>
        <Skill title="Java" pourcentage="20%"></Skill>
        <Skill title="Maple" pourcentage="50%"></Skill>
        </div>
      </div>


      <div className="rightPart">
        <Presentation/>
        <TitleRight title="EXPERIENCE"></TitleRight>
        <Period date1 = "06-2017" date2 = "06-2018" title1 = "Contestant" title2 = "IIEEE, Tunisie" title3 = "24H- programming"></Period>
        <Period date1 = "06-2017" date2 = "06-2018" title1 = "Contestant" title2 = "IIEgfdEE, Tunisie" title3 = "24H- programming"></Period>
        <TitleRight title="EDUCATION"></TitleRight>
        <Period date1 = "06-2027" date2 = "06-2018" title1 = "Contestant" title2 = "IIEEE, Tunisie" title3 = "24H- programming"></Period>
        <Period date1 = "06-2017" date2 = "06-2018" title1 = "Contestant" title2 = "IIEEE, Tunisie" title3 = "24H- programming"></Period>
        <Period date1 = "06-2017" date2 = "06-2018" title1 = "Contestant" title2 = "IIEEE, Tunisie" title3 = "24H- programming"></Period>
        <Period date1 = "06-2067" date2 = "06-2018" title1 = "Contestant151351" title2 = "IIEEE, Tunisie" title3 = "24H- programming"></Period>
        <Period date1 = "06-2017" date2 = "06-2018" title1 = "Contestant" title2 = "IIEEE, Tunisie" title3 = "24H- programming"></Period>
        <Period date1 = "06-2017" date2 = "06-2018" title1 = "Contestant" title2 = "IIEEE, Tunisie" title3 = "24H- programming"></Period>
        <Period date1 = "06-2017" date2 = "06-2018" title1 = "Contestant254" title2 = "IIEEE, Tunisie" title3 = "24H- programming"></Period>
        


      </div>
    </div>
  );
}

export default App;
