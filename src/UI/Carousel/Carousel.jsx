import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Carousel.module.css";

const languages = [
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'Microsoft SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
];

function Carousel() {
    const [current, setCurrent] = useState(0);
    const totalSlides = languages.length;

    const nextSlide = () => {
        setCurrent((current + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slider}>
            <FontAwesomeIcon icon={faChevronCircleLeft} className={styles.leftArrow} onClick={prevSlide} />
            <div className={styles.sliderWrapper} style={{ transform: `translateX(-${current * (100 / 8)}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {languages.map((info, index) => (
                    <div className={styles.slide} key={index}>
                        <div className={styles.carouselContainer}>
                            <img src={info.logo} alt={info.name} className={styles.carouselImage} />
                            <div className={styles.carouselText}>
                                <h3 className={styles.carouselTitle}>{info.name}</h3>
                                <button className={styles.carouselLearnMoreButton} onClick={() => window.open("/Projects", '_blank')}>Check Related Project</button>
                            </div>
                        </div>
                    </div>
                ))}
                {languages.map((info, index) => (
                    <div className={styles.slide} key={index + totalSlides}>
                        <div className={styles.carouselContainer}>
                            <img src={info.logo} alt={info.name} className={styles.carouselImage} />
                            <div className={styles.carouselText}>
                                <h3 className={styles.carouselTitle}>{info.name}</h3>
                                <button className={styles.carouselLearnMoreButton} onClick={() => window.open("/Projects", '_blank')}>Check Related Project</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <FontAwesomeIcon icon={faChevronCircleRight} className={styles.rightArrow} onClick={nextSlide} />
        </div>
    );
}

export default Carousel;
