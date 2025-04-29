import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Mark</h1>
        <div class="relative flex items-center">
            
            <span
              class="w-2 h-2 bg-green-400 rounded-full inline-block"
            ></span>
        
            <span
              class="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"
            ></span>
          </div>
        
        <p className={styles.description}>
        Hi! I'm a passionate Web Designer from Cebu, Philippines, with expertise as a Web Designer and WordPress Developer. I specialize in building visually appealing and user-friendly interfaces using my technology stack. My strengths include attention to detail and ability to deliver seamless user experiences. 
        </p>
        <a href="https://docs.google.com/document/d/1LmQY8mT_RwPcwARjCwtO8AGlSk4IcdmO/edit?usp=sharing&ouid=105332746559049057158&rtpof=true&sd=true" className={styles.contactBtn}>
          View Resume
        </a>
      </div>
      
      {/* <img
        src={getImageUrl("hero/Herosec.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
