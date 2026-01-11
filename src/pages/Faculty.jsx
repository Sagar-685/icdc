import React from 'react';
import './Faculty.css';

const facultyData = [
   {
    name: 'Dr.Remya Jayachandran',
    position: 'Assistant Professor,ECE,NIE MYSORE',
    imgSrc: '/faculty_images/remyamam.jpg',
    linkedin: 'https://www.linkedin.com/in/remya-jayachandran-6b8aab1b3',
  },
  {
    name: 'Dr.Ashok K',
    position: 'Assistant Professor,ECE,NIE MYSORE',
    imgSrc: '/faculty_images/ashok.jpg',
    linkedin: 'https://www.linkedin.com/in/salila-hegde-425035146',
  },
  {
    name: 'Dr.Rajalekshmi Kishore',
    position: 'HOD,ECE,NIE MYSORE',
    imgSrc: '/faculty_images/lakshmimam.jpg',
    linkedin: 'https://www.linkedin.com/in/salila-hegde-425035146',
  },
  {
    name: 'Dr.Nitesh K A',
    position: 'Faculty coordinator Idealab,NIE MYSORE',
    imgSrc: '/faculty_images/nitishsir.jpg',
  },
  {
    name: 'Dr.Salila Hegde',
    position: 'Faculty Advisor(External)',
    imgSrc: '/faculty_images/salilamam.jpg',
    linkedin: 'https://www.linkedin.com/in/salila-hegde-425035146',
  },
];

const Faculty = () => {
  return (
    <section id="faculty">
      <div className="body-faculty">
        <section className="faculty-section">
          <div className="title">
            <h1>FACULTY IN-CHARGE</h1>
            <p>Meet the faculty in charge of our club</p>
            <hr className="underline" />
          </div>
          <div className="faculty-container">
            {facultyData.map((faculty, index) => (
              <div className="faculty-card" key={index}>
                <img className="img-faculty" src={faculty.imgSrc} alt={faculty.name} />

                <h3>{faculty.name}</h3>
                <p>{faculty.position}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Faculty;
