import "./about.css";
import Card from "../CARD/card";
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function about() {
  useGSAP(()=>{
    let tl1 = gsap.timeline();
    tl1.from(".circle",{
      x:-100,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2,
      }
    })
    tl1.from(".line",{
      x:-100,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        start:"top 60%",
        end:"top 30%",
        
        scrub:2,
      }
    })
    tl1.from(".aboutdetails h2", {
      x:-100,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h2",
        scroll: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      }
    })
    tl1.from(".aboutdetails li", {
      y: 100,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h2",
        scroll: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      }
    })
    tl1.from(".card", {
      x: 100,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h2",
        scroll: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      }
    })

  })
  return (
    <div id="about" className="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h2>Personal Info</h2>
            <ul>
              <li>
                <span className="red">Name: </span>
                <span className="blue">Rohit Kumar</span>
              </li>
              <li>
                <span className="red">Age: </span>
                <span className="blue">20</span>
              </li>
              <li>
                <span className="red">Email: </span>
                <span className="blue">rohitkumar@gmail.com</span>
              </li>
              <li>
                <span className="red">Language: </span>
                <span className="blue">English, Hindi</span>
              </li>
            </ul>
          </div>
          <div className="personalinfo">
            <h2>Skills Info</h2>
            <ul>
              <li>
                <span className="red">Name: </span>
                <span className="blue">Rohit Kumar</span>
              </li>
              <li>
                <span className="red">Age: </span>
                <span className="blue">20</span>
              </li>
              <li>
                <span className="red">Email: </span>
                <span className="blue">rohitkumar@gmail.com</span>
              </li>
              {/* <li>Phone: <span>+91 9876543210</span></li> */}
            </ul>
          </div>
          
          <div className="personalinfo">
            <h2>Education </h2>
            <ul>
              <li>
                <span className="red">Degree: </span>
                <span className="blue">B.Tech</span>
              </li>
              <li>
                <span className="red">Diploma: </span>
                <span className="blue">MERN Stack</span>
              </li>
              <li>
                <span className="red">University: </span>
                <span className="blue">MDU Rohtak</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN Stack Developer" img={mern} />
        <Card title="Java Developer" img={java} />
        <Card title="DSA Developer" img={dsa} />
      </div>
    </div>
  );
}

export default about;
