import ghub from './ghub.svg';
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from 'react'
import lsd from "/Users/nikhilgautam/Desktop/per/pers/src/wp4076090.jpg"
import { NavLink } from 'react-router-dom'
import React, { Fragment, PureComponent } from 'react'
import {  Link } from "react-router-dom";
import './App.css';

import Weather from "./weather.js";
import ErrorAudio from '/Users/nikhilgautam/Desktop/per/pers/src/Dave_-_Starlight.mp3'
import ReactAudioPlayer from 'react-audio-player';
import pdf from "/Users/nikhilgautam/Desktop/per/pers/src/Software_Engineering_Resume.pdf"
import img2 from "/Users/nikhilgautam/Desktop/per/pers/src/Desktop-Forest-Backgrounds.jpg"
import img from "/Users/nikhilgautam/Desktop/per/pers/src/No-Mans-Sk.jpg"
import { Parallax, Background } from 'react-parallax';
import Image from "/Users/nikhilgautam/Desktop/per/pers/src/GitHub-Mark-64px.png"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function App() {
  const [offset, setOffset] = useState()
  const handleScroll = () => setOffset(window.pageYOffset)
  window.addEventListener('scroll', handleScroll)
  return (
    <div className="App">
      <div className ="text">
      <h1>NIKHIL GAUTAM</h1>
        <h3>Hello,Join me on this journey</h3>
      </div>
      <div className="img">
      <a href="https://github.com/ngautam222" target="blank">
        <img src={Image} alt="SVG as an image"
          style={{
            width:60,
            Align: "Left",
            top:0
          
          }}
        ></img>
        </a>
        <Parallax speed={-65} bgImage={img} strength={800}>
          <div className="scroll" style={{height:500}}>
            <div className="jif">
             
            </div> 
            <h1 id="hel">  I am a Computer Science Student at UMASS Amherst
            </h1>
            <h1 id="yo">I am planning to become a full stack Developer
            </h1>
            
            
            
          </div>
         
        </Parallax>
        <h1 id='pro'>Here is my resume</h1>
        <div id="doc" style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
        <Document  file={pdf}>
          <Page pageNumber={1} /> 
          </Document>
        </div>
   
        
         <Parallax speed={-65} bgImage={lsd} strength={-400}>
          <div className="sc" style={{height:500}}>
            <div className="j">
            </div> 
            <div id="projects">
        
              <h1>Here is one of my recent projects!</h1>
              <div id="kk">
              <h2>Weather App</h2>
               <div id ="list">
                <li>Used React JS to build this webapp</li>
                  <li>Fetches data from Openweather.org api on each search</li>
                  <li>Just type in the name of the place and get its weather</li>
                <li>More features incoming</li></div>
                <div id="we">
         
         <Weather />
            
         
         </div>
                
                </div>
              
      
      </div>
          </div>
         
        </Parallax>
        <div id="contact">
         
          </div>
        <Parallax speed={65} bgImage={img2} strength={700}>
          
        <div id="epilogue">
          <h5>You made it to the end</h5>
          <h5>Heres a good song for you!</h5>
        <ReactAudioPlayer
            src={ErrorAudio}
  
            controls
          />
          </div>
        
        <h6 id="l">Nikhil Gautam 2022</h6>

        </Parallax>
        </div>

   
      
    </div>
  
  
      
    
    
  );
}

export default App;
