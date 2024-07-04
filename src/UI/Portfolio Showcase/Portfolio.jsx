import React, { useEffect, useState } from 'react';
import PortfolioList from './PortfolioList';
import styles from './Portfolio.module.css';
import { FullStackWebApp, AndroidVotingSystem, Ecommerce, UnityGame2d, Chatbots, Capstone_Tier, MachineLearning, EmbeddedSystems, Algorithms } from "../../Utilities/Project Data";

export default function Portfolio({ setSelectedProject }) {
    const [selected, setSelected] = useState("Capstone Tier");
    const [data, setData] = useState([]);


    const list = [
        { id: "Capstone Tier", title: "Capstone Tier Projects" },
        { id: "ML", title: "Machine Learning and Mathematics" },
        { id: "Algorithms and Data Structures", title: "Algorithms and Data Structures" },
        { id: "Embedded Systems and Circuit Design", title: "Embedded Systems and Circuit Design" },
        { id: "web", title: "Web Apps" },
        { id: "mobile", title: "Android App" },
        { id: "chatbot", title: "Chat Bot App" },
        { id: "E-commerce", title: "E-commerce App" },
        { id: "Unity GameEngine 2D", title: "Unity Game Engine" },
    ];

    useEffect(() => {
        switch (selected) {
            case "Capstone Tier":
                setData(Capstone_Tier);
                break;
            case "ML":
                setData(MachineLearning);
                break;
            case "Embedded Systems and Circuit Design":
                setData(EmbeddedSystems);
                break;
            case "web":
                setData(FullStackWebApp);
                break;
            case "mobile":
                setData(AndroidVotingSystem);
                break;
            case "chatbot":
                setData(Chatbots);
                break;
            case "E-commerce":
                setData(Ecommerce);
                break;
            case "Unity GameEngine 2D":
                setData(UnityGame2d);
                break;
            case "Algorithms and Data Structures":
                setData(Algorithms);
                break;
            default:
                setData([]);
        }
    }, [selected]);

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
        setTimeout(() => {
            const worksSection = document.getElementById('works');
            if (worksSection) {
                worksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <div className={styles.portfolio} id="portfolio">
            <h1 className={styles.title}>My Projects</h1>
            <ul className={styles.portfolioList}>
                {list.map(item => (
                    <PortfolioList
                    key={item.id}
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    setSelectedProject={setSelectedProject}  // Add this line
                />
                ))}
            </ul>
            <div className={styles.container}>
                {data.map(d => (
                    <div key={d.id} className={styles.item}>
                        <img src={d.img} alt={d.title} />
                        <div className={styles.overlay}>
                            <h3>{d.title}</h3>
                            <p>{d.description}</p>
                            <div className={styles.buttonContainer}>
                                <a href={d.github_link} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                                    <h6>Go to Project</h6>
                                    <img src="https://ik.imagekit.io/emtbd/BLOG/github-mark-white.png?updatedAt=1718272026499" alt="GitHub link" />
                                </a>
                                <button className={styles.viewDetailsButton} onClick={() => handleProjectClick(d.id)}>
                            View Details
                        </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}