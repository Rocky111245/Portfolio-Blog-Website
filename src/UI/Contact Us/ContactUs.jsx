import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import styles from './ContactUs.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactPage} id='contact_me'>
      <div className={styles.overlay}>
        <div className={styles.contactContainer}>
          <h1 className={styles.title}>Contact Information</h1>
          <div className={styles.infoSection}>
            <p><strong>Email:</strong> rakibalhasan170@gmail.com</p>
            <p><strong>Phone:</strong> (+60) 164690349 (Malaysia)</p>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/ahmed-rakib-al-hasan-9853a31a9" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/Rocky111245" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaGithub size={40} />
            </a>
            <a href="https://wa.me/60164690349" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaWhatsapp size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;