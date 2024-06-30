import { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";
import portfolioStyles from "./Portfolio.module.css";
import {
    FullStackWebApp,
    AndroidVotingSystem,
    Ecommerce,
    UnityGame2d,
    Chatbot,
    Capstone_Tier
} from "../../Utilities/Project Data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        { id: "featured", title: "Capstone Tier" },
        { id: "web", title: "Web App" },
        { id: "mobile", title: "Mobile App" },
        { id: "chatbot", title: "Chat Bot" },
        { id: "E-commerce", title: "E-commerce" },
        { id: "Unity GameEngine 2D", title: "Unity 2D Game" }
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(Capstone_Tier);
                break;
            case "web":
                setData(FullStackWebApp);
                break;
            case "mobile":
                setData(AndroidVotingSystem);
                break;
            case "chatbot":
                setData(Chatbot);
                break;
            case "E-commerce":
                setData(Ecommerce);
                break;
            case "Unity GameEngine 2D":
                setData(UnityGame2d);
                break;
            default:
                setData([]);
        }
    }, [selected]);

    return (
        <div className={portfolioStyles.portfolio} id="portfolio">
            <h1 className={portfolioStyles.title}>My Projects</h1>
            <ul className={portfolioStyles.projectList}>
                {list.map(item => (
                    <PortfolioList
                        key={item.id}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className={portfolioStyles.container}>
                {data.map(d => (
                    <div key={d.id} className={portfolioStyles.item}>
                        <img src={d.img} alt={d.title} />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
