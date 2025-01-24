


  import React from 'react';
  import CircularProgress from '../../components/circularprogress.jsx';

const SkillItem = () => {
  const skills = [
    { label: 'C++', logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" },
    { label: 'Python', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
    { label: 'HTML', logo: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png" },
    { label: 'CSS', logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { label: 'JavaScript', logo: "https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png" },
    { label: 'React.js', logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
    { label: 'Node Js', logo: "https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development-thumbnail.png" },
    { label: 'Mongo DB', logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" },
    { label: 'Tailwind CSS', logo: "https://files.raycast.com/83afy69l6wjib1zd62gya59tpc76" },
    { label: 'Git & GitHub', logo: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png" },
  ];

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <CircularProgress 
            percentage={skill.percentage} 
            label={skill.label} 
            logo={skill.logo}  
          />
        </div>
      ))}
    </div>
  );
};

export default SkillItem;
