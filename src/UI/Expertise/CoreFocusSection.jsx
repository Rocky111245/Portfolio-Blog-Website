import React from 'react';
import core_focus_section_styles from './CoreFocusSection.module.css';

const CoreFocusSection = () => {
    return (
        <div className={core_focus_section_styles.coreFocusSection}>
            <h2 className={core_focus_section_styles.title}>Expertise Highlights</h2>
            <div className={core_focus_section_styles.cardsContainer}>
                <div className={core_focus_section_styles.card}>
                    <img src={'https://ik.imagekit.io/emtbd/BLOG/Matrix%20multiplication.png?updatedAt=1718281932848'} alt="Mathematics and Software" className={core_focus_section_styles.cardImage} />
                    <h3>Mathematics and Software</h3>
                    <p>
                        My exploration of machine learning has led me to deeply understand calculus and linear algebra. I've developed a custom mathematics library in C++, which I used to create a neural network framework called FLUX.
                    </p>
                </div>
                <div className={core_focus_section_styles.card}>
                    <img src={'https://ik.imagekit.io/emtbd/BLOG/Neural_network.svg.png?updatedAt=1718281931774'} alt="Fundamentals of Machine Learning" className={core_focus_section_styles.cardImage} />
                    <h3>Fundamentals of Machine Learning</h3>
                    <p>
                        I focus on understanding the mathematics behind machine learning, building frameworks from scratch. My neural network framework uses an in-house gradient calculation engine, differing from typical DAG-based frameworks.
                    </p>
                </div>
                <div className={core_focus_section_styles.card}>
                    <img src={'https://ik.imagekit.io/emtbd/BLOG/DSA.png?updatedAt=1718281918942'} alt="Data Structures and Algorithms" className={core_focus_section_styles.cardImage} />
                    <h3>Data Structures and Algorithms</h3>
                    <p>
                        I enjoy exploring various algorithms and data structures. One of my notable projects is implementing the Timsort algorithm in C, showcasing my algorithmic thinking.
                    </p>
                </div>
                <div className={core_focus_section_styles.card}>
                    <img src={'https://ik.imagekit.io/emtbd/rakib%20portfolio/DALL_E%202023-10-16%2011.48.53%20-%20Photo%20of%20a%20robot%20powered%20by%20an%20Arduino%20board.%20The%20robot%20is%20equipped%20with%20an%20HC-SR04%20Ultrasonic%20Sensor%20at%20the%20front.%20It%20has%204%20yellow%20wheels%20driven%20by%20h.png?updatedAt=1697435361804'} alt="Embedded Systems" className={core_focus_section_styles.cardImage} />
                    <h3>Embedded Systems</h3>
                    <p>
                        I developed an obstacle-avoiding robot using Arduino and C++, implementing custom algorithms to enhance its functionality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoreFocusSection;
