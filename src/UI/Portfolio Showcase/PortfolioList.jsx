import portfolio_list_styles from "./PortfolioList.module.css";

export default function PortfolioList({ title, active, setSelected, id }) {
    return (
        <li
            className={`${portfolio_list_styles.portfolioList} ${active ? portfolio_list_styles.active : ""}`}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    );
}
