import React from 'react';
import styles from './PortfolioList.module.css';

export default function PortfolioList({ title, active, setSelected, id, setSelectedProject }) {
    const handleClick = () => {
        setSelected(id);
        setSelectedProject(id);
    };

    return (
        <li
            className={`${styles.portfolioList} ${active ? styles.active : ''}`}
            onClick={handleClick}
        >
            {title}
        </li>
    );
}