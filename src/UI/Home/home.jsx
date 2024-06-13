import React from 'react';
import style from './home.module.css';
import SkillsSection from "../Skill Section/SkillsSection";
import CoreFocusSection from "../Expertise/CoreFocusSection";

const Home = () => {
    return (
        <>
        <div className={style.home}>
            <div className={style.content}>
                <img
                    src="https://ik.imagekit.io/emtbd/BLOG/Rocky?updatedAt=1718260687516"
                    alt="Profile"
                    className={style.roundedImage}
                    loading="lazy"
                />
                <div className={style.text}>
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
                    <div className={style.buttons}>
                        <button className={style.button} onClick={() => window.location.href = '#skills'}>See My Skills</button>
                        <button className={style.button} onClick={() => window.location.href = '#projects'}>Head to Capstone Projects</button>
                    </div>
                </div>
            </div>
        </div>
            <SkillsSection/>
            <CoreFocusSection/>

        </>
    );
}

export default Home;
