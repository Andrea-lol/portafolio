import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import { AboutBox } from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__tite">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className='about__image' />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi eos excepturi delectus, in cumque quisquam esse veritatis commodi dolore ducimus nam
              voluptates velit quibusdam repellat libero, numquam voluptatem repellendus! Sed.</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Animation</h3>
                <span className="skills__number">65%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage animation"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox/>

    </section>
  );
};

export default About