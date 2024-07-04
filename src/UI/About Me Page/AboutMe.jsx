import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutMeContainer}>
        <h1 className={styles.title}>About Ahmed Rakib Al Hasan</h1>
        
        <section className={styles.introSection}>
          <p>
            Blending the innovative spirit of a Renewable Energy Engineer with the technical prowess of a seasoned Software Developer, I bring a unique perspective to complex problem-solving, leveraging over two years of diverse technological expertise.
          </p>
        </section>

        <section className={styles.backgroundSection}>
          <h2>My Journey</h2>
          <p>
            My path has been one of continuous learning and exploration. From delving into renewable energy solutions to crafting software, I've always been driven by curiosity and the desire to make a positive impact.
          </p>
          <div className={styles.journeyPath}>
            {['Renewable Energy Engineering', 'Self-taught Web Development', 'Embedded Systems and Electronic Systems', 'Mathematics for Neural Networks', 'Machine Learning and AI'].map((step, index, array) => (
              <div key={index} className={styles.journeyStep}>
                <span>{step}</span>
                {index < array.length - 1 && <span className={styles.arrow}>→</span>}
              </div>
            ))}
          </div>
          <p>
            I keep on exploring, as proven by my many projects. This drive has led me to explore various areas of software development, including building neural network frameworks and diving deep into algorithms and embedded systems.
          </p>
        </section>

        <section className={styles.recruiterAppealSection}>
          <h2>What Sets Me Apart</h2>
          <ul>
            {[
              "Versatile problem-solver with a rare combination of renewable energy expertise and advanced software development skills",
              "Self-driven learner who rapidly adapts to new technologies and challenges",
              "Proven track record in developing complex systems, including neural network frameworks and embedded systems",
              "Strong foundation in algorithm design, analysis, and optimization",
              "Experience with cutting-edge AI tools and large language models",
              "Full-stack development capabilities, demonstrating end-to-end project management skills",
              "Global perspective gained from participation in international conferences and exhibitions",
              "Entrepreneurial mindset, evidenced by the creation of diverse and innovative projects",
              "Exceptional debugging skills honed through extensive work on complex algorithms and systems",
              "Interdisciplinary collaborator, capable of bridging gaps between technical and business domains",
              "Pursuing an MBA, indicating a commitment to combining technical expertise with business acumen",
              "Passionate about sustainable technology solutions, aligning with growing industry trends",
              "Demonstrated ability to work on performance-critical applications",
              "Strong communication skills, as evidenced by participation in international events"
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.globalPerspectiveSection}>
          <h2>Global Perspective</h2>
          <p>
            My quest for knowledge has taken me to various international conferences and exhibitions, providing me with a global perspective on medical advancements and the healthcare industry.
          </p>
          <div className={styles.imageGallery}>
            {[
              {
                src: "https://ik.imagekit.io/emtbd/rakib%20portfolio/Picture1.jpg?updatedAt=1720081214235",
                alt: "Dubai convention",
                caption: "Arab Health 2023 at the Dubai World Trade Centre",
                description: "Attending this prestigious event broadened my understanding of global healthcare innovations and technologies."
              },
              {
                src: "https://ik.imagekit.io/emtbd/rakib%20portfolio/Picture2.jpg?updatedAt=1720081214145",
                alt: "Kuala Lumpur convention",
                caption: "APAO Conference 2023 at the Kuala Lumpur Convention Centre",
                description: "This conference provided insights into the latest advancements in ophthalmology and medical technologies in the Asia-Pacific region."
              },
              {
                src: "https://ik.imagekit.io/emtbd/rakib%20portfolio/Picture3.jpg?updatedAt=1720081214241",
                alt: "OSB Bangladesh exhibition",
                caption: "OSB (Ophthalmology Society of Bangladesh) Medical Exhibition",
                description: "I had the opportunity to design an exhibition booth and network with professionals and suppliers in the field, gaining valuable industry insights."
              },
              {
                src: "https://ik.imagekit.io/emtbd/rakib%20portfolio/Picture4.jpg?updatedAt=1720081214135",
                alt: "Learning about eye technologies",
                caption: "Medical Information Session on Eye Technologies",
                description: "Learned about cutting-edge eye technologies from Dr. Suzuki of Topcon Healthcare, expanding my knowledge in specialized medical fields."
              }
            ].map((item, index) => (
              <div key={index} className={styles.imageItem}>
                <img src={item.src} alt={item.alt} className={styles.galleryImage} />
                <p className={styles.imageCaption}>{item.caption}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.continuousLearningSection}>
          <h2>Continuous Learning and Future Vision</h2>
          <p>
            I believe in the power of lifelong learning. Whether it's reverse engineering complex systems or tackling new programming languages, I thrive on challenges that expand my skillset. This mindset has led me to pursue an MBA, aiming to complement my technical expertise with business acumen.
          </p>
          <p>
            Looking ahead, I'm excited about the possibilities that lie at the intersection of technology, sustainability, and business. I'm committed to using my diverse skills and experiences to contribute to innovative solutions for tomorrow's challenges, particularly in renewable energy and software development.
          </p>
        </section>

        <Link to="/" className={styles.backButton}>Back to Home</Link>
      </div>
    </>
  );
};

export default AboutMe;
