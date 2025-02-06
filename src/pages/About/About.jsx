 

 
 

 
import SkillItem from '../Resume//SkillItem';

import React from 'react';
 





const About = () => {
  
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      I am currently pursuing a B.Tech in Artificial Intelligence and Machine Learning  at Madhav Institute of Technology and Science, Gwalior. 
      My aggregate CGPA is  8.24. My interests lies in   DSA, Web Development and Machine Learning. 
       In addition, I've completed one full-stack projects—an e-commerce site along with various frontend projects.
        My web development tech stack includes HTML, CSS, JavaScript, React.js, MongoDB, and NodeJs and ExpressJs. 
        I'm proficient in programming with C and C++, and I also possess a foundational understanding of Python. 
        I consider myself an enthusiastic learner and always strive to excel in any assigned task.
      </p>

       
    </section>


    
   <section>

   <div className="skills-container">
        <h3 className="h3 skills-title">My skills</h3>
        <SkillItem/>
      </div>

   </section>
    


    
    
<section> 
<a href='https://drive.google.com/file/d/1xpgQo6RFIitaltICG3JreIrux_EpJFQF/view?usp=sharing'target="_blank"
        rel="noreferrer">
   <button className="form-btn"  >
                <span>Resume </span> 
              
            </button></a>
            </section>
      

  </article>
  )
}

export default About
