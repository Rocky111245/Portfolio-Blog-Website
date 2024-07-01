import React from 'react';
import home_style from './home.module.css';
import SkillsSection from "../Skill Section/SkillsSection";
import CoreFocusSection from "../Expertise/CoreFocusSection";
import Portfolio from "../Portfolio Showcase/Portfolio";
import Works from '../Works/Works';



const Home = () => {
    return (
        <>
        <div className={home_style.home}>
            <div className={home_style.content}>
            <img
  src="https://ik.imagekit.io/emtbd/BLOG/Rocky?updatedAt=1718260687516"
  srcSet="
    https://ik.imagekit.io/emtbd/BLOG/Rocky?updatedAt=1718260687516&tr=w-400 400w,
    https://ik.imagekit.io/emtbd/BLOG/Rocky?updatedAt=1718260687516&tr=w-800 800w,
    https://ik.imagekit.io/emtbd/BLOG/Rocky?updatedAt=1718260687516&tr=w-1200 1200w
  "
  sizes="(max-width: 400px) 100vw, 400px"
  alt="Profile"
  className={home_style.roundedImage}
  loading="lazy"
/>
                <div className={home_style.text}>
                    <h1>Ahmed Rakib Al Hasan</h1>
                    <p>
                        As a Renewable Energy Engineer turned Software Developer, I have a passion for solving complex problems. My self-learning journey in programming has led me to develop a <strong>neural network framework from scratch, FLUX, similar to PyTorch and TensorFlow</strong>, and work on various <strong>algorithms</strong> and <strong>embedded systems</strong>.
                    </p>
                    <p>
                        With a strong foundation in algorithms, I thrive on challenges. My expertise spans C, C++, HTML, CSS, JavaScript, React, and Node.js, proven through successful projects for diverse clients.
                    </p>
                    <p>
                        Currently, I am pursuing an MBA to blend technical skills with business knowledge, aiming to create sustainable and efficient solutions.
                    </p>
                    <p>
                        I learn primarily through reverse engineering and embrace new challenges eagerly. I am a versatile individual, always striving to expand my skill set.
                    </p>
                    <div className={home_style.buttons}>
                        <button className={home_style.button} onClick={() => window.location.href = '#skills'}>See My Skills</button>
                        <button className={home_style.button} onClick={() => window.location.href = '#projects'}>Head to Capstone Projects</button>
                    </div>
                </div>
            </div>
        </div>
            <SkillsSection/>
            <Portfolio/>
            <Works/>
            <CoreFocusSection/>



        </>
    );
}

export default Home;
