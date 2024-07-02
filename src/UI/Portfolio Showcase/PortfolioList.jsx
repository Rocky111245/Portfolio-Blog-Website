import React from 'react';
import styles from './PortfolioList.module.css';

export default function PortfolioList({ title, active, setSelected, id }) {
    return (
        <li
            className={`${styles.portfolioList} ${active ? styles.active : ''}`}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    );
}