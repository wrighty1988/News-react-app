import React from 'react';
import './App.css';
import Box from './components/Box';
import news1 from './images/1.jpg';
import news2 from './images/2.jpg';
import news3 from './images/3.jpg';
import news4 from './images/4.jpg';
import news5 from './images/5.jpg';
import news6 from './images/6.jpg';


function App() {
  return (
    <div className="App">
        <div className="container">

            <div className="DivHeaderOne">
                <h1>News headlines ></h1>
            </div>

            <div className="DivHeadertwo">
                <h1>Sports headlines ></h1>
            </div>

              <Box classBox="box1" image={news1} heading="Alcohol sales could be banned in shops after 9pm to stop post-pub parties"/>
              <Box classBox="box2" image={news2} heading="James Bulger killer Jon Venables, 38, refused parole and must stay in prison"/>
              <Box classBox="box3" image={news3} heading="Parrots had to be removed from zoo after teaching each other to swear"/>
              <Box classBox="box4" image={news4} heading="Boris Johnson’s law-breaking Bill to override Brexit deal cleared by Commons"/>
              <Box classBox="box5" image={news5} heading="Donald Trump refuses to condemn white supremacists and tells them to ‘stand by"/>
              <Box classBox="box6" image={news6} heading="Vegan parents who starved baby of nutrients causing cerebral palsy are spared jail"/>
         </div>
       
    </div>
  );
}

export default App;
