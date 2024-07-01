import styles from './Works.module.css';
import { useRef, useState } from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const data = [
    {
      id: "1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/full_stack.png?updatedAt=1719760500969",
      title: "Full Stack Web Application",
      desc: `Inventory Management System combined with a Decision Support System incorporating a Charts.js Dashboard.
          Stack-(React,Node.js,Express.js,mySQL)`,
      iframeSrc: "https://player.vimeo.com/video/850517177?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      isVideo: true,
      githublink: "https://github.com/Nabila861/Company-Decision-Support-System.git"
    },
    {
      id: "2",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/full_stack.png?updatedAt=1719760500969",
      title: "Full Stack Web Application",
      desc: `Inventory Management System combined with a Decision Support System incorporating a Charts.js Dashboard.
        Stack-(React,Node.js,Express.js,mySQL)`,
      githublink: "https://github.com/Nabila861/Company-Decision-Support-System.git",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Full%20Stack%20Web%20App/2.png?updatedAt=1689953157860"
    },
    {
      id: "3",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/full_stack.png?updatedAt=1719760500969",
      title: "Full Stack Web Application",
      githublink: "https://github.com/Nabila861/Company-Decision-Support-System.git",
      desc: `Inventory Management System combined with a Decision Support System incorporating a Charts.js Dashboard.
      Stack-(React,Node.js,Express.js,mySQL)`,
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Full%20Stack%20Web%20App/6.png?updatedAt=1689953158130"
    },
    {
      id: "4",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/mobile.png?updatedAt=1719760501119",
      title: "Android Voting App",
      githublink: "https://github.com/Nabila861/Android-Voting-App.git",
      desc: "This is a Voting App made using Android Studio using Java as the language of preference. It is a fully finished app which allows admin(s) to start the voting process and students to vote for their potential candidate. The results are displayed in an interactive dashboard.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/2.png?updatedAt=1689953338059",
    },
    {
      id: "5",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/mobile.png?updatedAt=1719760501119",
      title: "Android Voting App",
      githublink: "https://github.com/Nabila861/Android-Voting-App.git",
      desc: "This is a Voting App made using Android Studio using Java as the language of preference. It is a fully finished app which allows admin(s) to start the voting process and students to vote for their potential candidate. The results are displayed in an interactive dashboard.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/5.png?updatedAt=1689953337932"
    },
    {
      id: "6",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/mobile.png?updatedAt=1719760501119",
      title: "Android Voting App",
      githublink: "https://github.com/Nabila861/Android-Voting-App.git",
      desc: "This is a Voting App made using Android Studio using Java as the language of preference. It is a fully finished app which allows admin(s) to start the voting process and students to vote for their potential candidate. The results are displayed in an interactive dashboard.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/6.png?updatedAt=1689953337750"
    },
    {
      id: "8",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/medical_chatbot.png?updatedAt=1719760501071",
      title: "Medical Chatbot",
      githublink: "https://github.com/Nabila861/Interactive-Medical-Chatbot.git",
      desc: "This chatbot utilizes the asp.net console application using C# to make a reliable chatbot that can also perform multiple calculations. This can be a stepping stone for a clinic to reduce high inquiry pressure during peak times.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Chatbot%20using%20C_/4.png?updatedAt=1689953114537"
    },
    {
      id: "9",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/medical_chatbot.png?updatedAt=1719760501071",
      title: "Medical Chatbot",
      githublink: "https://github.com/Nabila861/Interactive-Medical-Chatbot.git",
      desc: "This chatbot utilizes the asp.net console application using C# to make a reliable chatbot that can also perform multiple calculations. This can be a stepping stone for a clinic to reduce high inquiry pressure during peak times.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Chatbot%20using%20C_/5.png?updatedAt=1689953114731"
    },
    {
      id: "11",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/ecommerce.png?updatedAt=1719760789284",
      title: "E-commerce App",
      githublink: "https://github.com/Nabila861/Flower-Shop-App.git",
      desc: "This is a simple ecommerce static website which uses C#,asp.net,HTML5,CSS and BOOTSTRAP to create an app for selling flowers to customers.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/ASP.net%20Flower%20Shop/3.png?updatedAt=1689953135897"
    },
    {
      id: "12",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/unity.png?updatedAt=1719760626593",
      title: "Unity 2D Game",
      githublink: "https://github.com/Nabila861/Unity-Game-Engine-2D-Game-CastleHeart.git",
      desc: "This is a 2D game developed using Unity Game Engine and the language used was C#. It has three levels with various enemies,traps and a final boss.",
      iframeSrc: "https://player.vimeo.com/video/850518899?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      isVideo: true
    },
    {
      id: "13",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/unity.png?updatedAt=1719760626593",
      title: "Unity 2D Game",
      githublink: "https://github.com/Nabila861/Unity-Game-Engine-2D-Game-CastleHeart.git",
      desc: "This is a 2D game developed using Unity Game Engine and the language used was C#. It has three levels with various enemies,traps and a final boss.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/2D%20Unity%20Game/10.png?updatedAt=1689953189360"
    }
    
  
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className={styles.works} id="works">
      <div className={styles.slider} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className={styles.container}>
            <div className={styles.item}>
              <div className={styles.left}>
                <div className={styles.leftContainer}>
                  <div className={styles.iconContainer}>
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    <a href={d.githublink} target="_blank" rel="noopener noreferrer">
                      <button>
                        <TbBrandGithubFilled className={styles.icon} />
                        Github Repository
                      </button>
                    </a>
                  </span>
                </div>
              </div>
              <div className={styles.right}>
                    {d.isVideo ? (
                      d.iframeSrc ? (
                        <iframe 
                          src={d.iframeSrc} 
                          allow="autoplay"
                          className={styles.rightimages}
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <video 
                          ref={videoRef} 
                          className={styles.rightimages} 
                          muted 
                          controls
                          playsInline
                        >
                          <source src={d.img} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <img className={styles.rightimages} src={d.img} alt="" />
                    )}
                  </div>
            </div>
          </div>
        ))}
      </div>
      <FaChevronLeft className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => handleClick("left")} />
      <FaChevronRight className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => handleClick("right")} />
    </div>
  );
}
