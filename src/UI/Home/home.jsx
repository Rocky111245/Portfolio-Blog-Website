// Home.js (Modified)
import React, { useState } from 'react';
import home_style from './home.module.css';
import SkillsSection from "../Skill Section/SkillsSection";
import Portfolio from "../Portfolio Showcase/Portfolio";
import Works from '../Works/Works';
import SkillsAndInterests from '../ExpertiseShowcase/ExpertiseShowcase';
import ContactPage from '../Contact Us/ContactUs';
import Footer from '../Footer/Footer';

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <div id="home" className={home_style.home}>
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
                            I am a self-taught Software Engineer with a background in Renewable Energy Engineering, driven by a passion for solving complex problems. My self-learning journey led me to create <strong>FLUX</strong>, a custom-built neural network framework designed as an educational tool, and pioneer projects like implementing one of the most complex sorting algorithms like <strong>Timsort</strong> in C++, as well as engineering embedded systems, including an automatic solar tracker and an autonomous obstacle-avoiding robot using Arduino.
                        </p>
                        <p>
                            With a strong foundation in algorithms and an understanding of underlying data structures, I thrive on challenges. My expertise spans C, C++, HTML, CSS, JavaScript, React, and Node.js, proven through successfully published projects.
                        </p>
                        <p>
                            Currently, I am pursuing an MBA to blend technical skills with business knowledge, aiming to create sustainable and efficient solutions.
                        </p>
                        <p>
                            I learn primarily through reverse engineering and eagerly embrace new challenges. I am a versatile individual, always striving to expand my skill set.
                        </p>
                        <div className={home_style.buttons}>
                        <button className={home_style.button} onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>See My Skills</button>
                        <button className={home_style.button} onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>Head to Capstone Projects</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="skills">
                <SkillsSection />
            </div>
            <div id="portfolio">
                <Portfolio setSelectedProject={setSelectedProject} />
            </div>
            <div id="works">
                <Works selectedProject={selectedProject} />
            </div>
            <div>
                <SkillsAndInterests />
            </div>
            <div>
                <ContactPage />
            </div>
            <Footer theme="oceanBlue" />
        </>
    );
}

export default Home;