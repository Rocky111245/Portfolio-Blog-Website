import React, { useRef, useState, useEffect } from "react";
import styles from './Works.module.css';
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Works({ selectedProject }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const worksRef = useRef(null);
  const data = [
    {
      id: "capstone_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/8345929.png?updatedAt=1719760501130",
      title: "FLUX- A Custom-Made Neural Network Framework",
      desc: `This custom Deep Neural Network Framework, built from scratch in C and C++, emphasizes educational value by using core mathematical principles (Matrices and Gradients).This framework allows users to create, train, and deploy neural models while understanding the underlying mathematics.`,
      iframeSrc: "https://player.vimeo.com/video/850517177?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      isVideo: true,
      githublink: "https://github.com/Rocky111245/Dense-Matrix-Driven-Discriminative-Neural-Network-Framework"
    },
    {
      id: "capstone_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/8345929.png?updatedAt=1719760501130",
      title: "FLUX- A Custom-Made Neural Network Framework",
      desc: `This custom Deep Neural Network Framework, built from scratch in C and C++, emphasizes educational value by using core mathematical principles (Matrices and Gradients).This framework allows users to create, train, and deploy neural models while understanding the underlying mathematics.`,
      githublink: "https://github.com/Rocky111245/Dense-Matrix-Driven-Discriminative-Neural-Network-Framework",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Full%20Stack%20Web%20App/2.png?updatedAt=1689953157860"
    },
    {
      id: "capstone_3",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/full_stack.png?updatedAt=1719760500969",
      title: "Full Stack Web Application",
      desc: `Inventory Management System combined with a Decision Support System incorporating a Charts.js Dashboard.
          Stack-(React,Node.js,Express.js,mySQL)`,
      iframeSrc: "https://player.vimeo.com/video/850517177?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      isVideo: true,
      githublink: "https://github.com/Rocky111245/Company-Decision-Support-System"
    },
    {
      id: "capstone_3",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/full_stack.png?updatedAt=1719760500969",
      title: "Full Stack Web Application",
      desc: `Inventory Management System combined with a Decision Support System incorporating a Charts.js Dashboard.
        Stack-(React,Node.js,Express.js,mySQL)`,
      githublink: "https://github.com/Rocky111245/Company-Decision-Support-System",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Full%20Stack%20Web%20App/2.png?updatedAt=1689953157860"
    },
    {
      id: "capstone_3",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/full_stack.png?updatedAt=1719760500969",
      title: "Full Stack Web Application",
      githublink: "https://github.com/Nabila861/Company-Decision-Support-System.git",
      desc: `Inventory Management System combined with a Decision Support System incorporating a Charts.js Dashboard.
      Stack-(React,Node.js,Express.js,mySQL)`,
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Full%20Stack%20Web%20App/6.png?updatedAt=1689953158130"
    },
    {
      id: "capstone_5",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/sorting_algorithm_icon_transparent.png?updatedAt=1719918459752",
      title: "TimSort Hybrid Algorithm",
      desc: `I recreated the TimSort hybrid algorithm from scratch in C++. TimSort, one of the highest complexity algorithms also known for its stability and efficiency, is the sorting algorithm used in Python's built-in sort and Java's Arrays.sort.`,
      iframeSrc: "https://player.vimeo.com/video/850517177?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      isVideo: true,
      githublink: "https://github.com/Rocky111245/TimSort-from-Scratch-in-Cpp"
    },
    {
      id: "capstone_5",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/DALL_E%202024-07-02%2018.59.34%20-%20Create%20an%20abstract%20PNG%20icon%20that%20clearly%20depicts%20the%20concept%20of%20sorting.%20The%20icon%20should%20feature%20elements%20such%20as%20bars%20or%20blocks%20arranged%20in%20a%20sequent.webp?updatedAt=1719917984316",
      title: "TimSort Hybrid Algorithm",
      githublink: "https://github.com/Rocky111245/TimSort-from-Scratch-in-Cpp",
      desc: "I recreated the TimSort hybrid algorithm from scratch in C++. TimSort, one of the highest complexity algorithms also known for its stability and efficiency, is the sorting algorithm used in Python's built-in sort and Java's Arrays.sort.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/2.png?updatedAt=1689953338059",
    },
    {
      id: "capstone_7",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/3134222.webp?updatedAt=1719760501110",
      title: "Innovative Autonomous Obstacle-Avoiding Robot",
      githublink: "https://github.com/Rocky111245/Android-Voting-App",
      desc: "I designed and developed an autonomous obstacle-avoiding robot from scratch, showcasing my proficiency in hardware and software integration, as well as my ability to create custom algorithms to solve real-world problems.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/2.png?updatedAt=1689953338059",
    },
    {
      id: "capstone_7",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/3134222.webp?updatedAt=1719760501110",
      title: "Innovative Autonomous Obstacle-Avoiding Robot",
      githublink: "https://github.com/Rocky111245/Android-Voting-App",
      desc: "I designed and developed an autonomous obstacle-avoiding robot from scratch, showcasing my proficiency in hardware and software integration, as well as my ability to create custom algorithms to solve real-world problems.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/2.png?updatedAt=1689953338059",
    },
    {
      id: "embedded_3",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/png-transparent-network-electronic-circuit-printed-circuit-boards-electrical-network-circuit-diagram-circuit-design-central-processing-unit-black-and-white-thumbnail.png?updatedAt=1719926342018",
      title: "Microcontroller Circuit Design in EasyEDA ",
      desc: "In addition to my primary projects, I have hands-on experience with EasyEDA for circuit design and development. Developed and recreated projects using the ESP32 microcontroller, showcasing my ability to work with advanced microcontroller platforms and implement IoT solutions.",
      img: "https://ik.imagekit.io/emtbd/rakib%20portfolio/1.png?updatedAt=1719926152379"
    },
    {
      id: "ml_2",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/68747470733a2f2f63646e2e6b617374617469632e6f72672f676f6f676c6575736572636f6e74656e742f39586571513273747770476258756c6931545753626e4851774954667259565f41746d6.png?updatedAt=1719922050668",
      title: "Advanced Mathematics Matrices Library in Modern C++",
      githublink: "https://github.com/Rocky111245/C-Matrix-Library-for-Neural-Networks",
      desc: "I specifically crafted a Mathematics Matrices Library in modern C++ to enhance readability, speed, and robustness. This meticulously designed library is optimized for developing neural network frameworks, ensuring high performance and reliability. Key features include",
      img: "https://ik.imagekit.io/emtbd/rakib%20portfolio/1.png?updatedAt=1719922290154",
    },
    {
      id: "ml_2",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/68747470733a2f2f63646e2e6b617374617469632e6f72672f676f6f676c6575736572636f6e74656e742f39586571513273747770476258756c6931545753626e4851774954667259565f41746d6.png?updatedAt=1719922050668",
      title: "Advanced Mathematics Matrices Library in Modern C++",
      githublink: "https://github.com/Rocky111245/C-Matrix-Library-for-Neural-Networks",
      desc: "I specifically crafted a Mathematics Matrices Library in modern C++ to enhance readability, speed, and robustness. This meticulously designed library is optimized for developing neural network frameworks, ensuring high performance and reliability. Key features include",
      img: "https://ik.imagekit.io/emtbd/rakib%20portfolio/Screenshot%202024-07-02%20201058.png?updatedAt=1719922289087",
    },
    {
      id: "fullstack_2",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/full_stack.png?updatedAt=1719760500969",
      title: "Professional Business Website Development Using React",
      desc: `I professionally developed a real business website for a client, utilizing modern React design patterns to ensure a high-quality, efficient, and visually appealing web presence.`,
      iframeSrc: "https://player.vimeo.com/video/850517177?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      isVideo: true,
      githublink: "https://github.com/Rocky111245/Business-Website"
    },
    {
      id: "fullstack_2",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/full_stack.png?updatedAt=1719760500969",
      title: "Professional Business Website Development Using React",
      githublink: "https://github.com/Rocky111245/Business-Website",
      desc: "I professionally developed a real business website for a client, utilizing modern React design patterns to ensure a high-quality, efficient, and visually appealing web presence.",
      img: "https://ik.imagekit.io/emtbd/rakib%20portfolio/11.png?updatedAt=1719911464092",
    },
    {
      id: "android_voting_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/mobile.png?updatedAt=1719760501119",
      title: "Android Voting App",
      githublink: "https://github.com/Rocky111245/Android-Voting-App",
      desc: "This is a Voting App made using Android Studio using Java as the language of preference. It is a fully finished app which allows admin(s) to start the voting process and students to vote for their potential candidate. The results are displayed in an interactive dashboard.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/2.png?updatedAt=1689953338059",
    },
    {
      id: "android_voting_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/mobile.png?updatedAt=1719760501119",
      title: "Android Voting App",
      githublink: "https://github.com/Rocky111245/Android-Voting-App",
      desc: "This is a Voting App made using Android Studio using Java as the language of preference. It is a fully finished app which allows admin(s) to start the voting process and students to vote for their potential candidate. The results are displayed in an interactive dashboard.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/5.png?updatedAt=1689953337932"
    },
    {
      id: "android_voting_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/mobile.png?updatedAt=1719760501119",
      title: "Android Voting App",
      githublink: "https://github.com/Rocky111245/Android-Voting-App",
      desc: "This is a Voting App made using Android Studio using Java as the language of preference. It is a fully finished app which allows admin(s) to start the voting process and students to vote for their potential candidate. The results are displayed in an interactive dashboard.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Android%20Studio/6.png?updatedAt=1689953337750"
    },
    {
      id: "chatbot_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/medical_chatbot.png?updatedAt=1719760501071",
      title: "Medical Chatbot",
      githublink: "https://github.com/Rocky111245/Interactive-Medical-Chatbot",
      desc: "This chatbot utilizes the asp.net console application using C# to make a reliable chatbot that can also perform multiple calculations. This can be a stepping stone for a clinic to reduce high inquiry pressure during peak times.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Chatbot%20using%20C_/4.png?updatedAt=1689953114537"
    },
    {
      id: "chatbot_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/medical_chatbot.png?updatedAt=1719760501071",
      title: "Medical Chatbot",
      githublink: "https://github.com/Rocky111245/Interactive-Medical-Chatbot",
      desc: "This chatbot utilizes the asp.net console application using C# to make a reliable chatbot that can also perform multiple calculations. This can be a stepping stone for a clinic to reduce high inquiry pressure during peak times.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/Chatbot%20using%20C_/5.png?updatedAt=1689953114731"
    },
    {
      id: "ecommerce_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/ecommerce.png?updatedAt=1719760789284",
      title: "E-commerce App",
      githublink: "https://github.com/Rocky111245/Flower-Shop-App",
      desc: "This is a simple ecommerce static website which uses C#,asp.net,HTML5,CSS and BOOTSTRAP to create an app for selling flowers to customers.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/ASP.net%20Flower%20Shop/3.png?updatedAt=1689953135897"
    },
    {
      id: "unity_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/unity.png?updatedAt=1719760626593",
      title: "Unity 2D Game",
      githublink: "https://github.com/Rocky111245/Unity-Game-Engine-2D-Game-CastleHeart",
      desc: "This is a 2D game developed using Unity Game Engine and the language used was C#. It has three levels with various enemies,traps and a final boss.",
      iframeSrc: "https://player.vimeo.com/video/850518899?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      isVideo: true
    },
    {
      id: "unity_1",
      icon: "https://ik.imagekit.io/emtbd/rakib%20portfolio/unity.png?updatedAt=1719760626593",
      title: "Unity 2D Game",
      githublink: "https://github.com/Rocky111245/Unity-Game-Engine-2D-Game-CastleHeart",
      desc: "This is a 2D game developed using Unity Game Engine and the language used was C#. It has three levels with various enemies,traps and a final boss.",
      img: "https://ik.imagekit.io/emtbd/Project%20screenshots%20and%20Videos/2D%20Unity%20Game/10.png?updatedAt=1689953189360"
    }
  ];


  useEffect(() => {
    if (selectedProject) {
      const index = data.findIndex(item => item.id === selectedProject);
      if (index !== -1) {
        setCurrentSlide(index);
        worksRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedProject]);

  const handleClick = (way) => {
    if (way === "left") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1);
    } else {
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
  };

  return (
    <div className={styles.works} id="works" ref={worksRef}>
      <div className={styles.slider} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div key={d.id} className={styles.container}>
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
