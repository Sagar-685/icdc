import React from 'react';
import './Faculty.css';

const facultyData = [
  {
    name: 'Dr.Salila Hegde',
    position: 'Associate Professor, ECE, NIE MYSORE',
    imgSrc: '/faculty_images/salilamam.jpg',
    linkedin: 'https://www.linkedin.com/in/salila-hegde-425035146',
  },
  {
    name: 'Dr.Remya Jayachandran',
    position: 'Assistant Professor , ECE, NIE MYSORE',
    imgSrc: '/faculty_images/remyamam.jpg',
    linkedin: 'https://www.linkedin.com/in/remya-jayachandran-6b8aab1b3',
  },
  {
    name: 'Dr.Nitesh K A',
    position: 'Assistant Professor , ECE, NIE MYSORE',
    imgSrc: '/faculty_images/nitishsir.jpg',
  },
  {
    name: 'Dr.Pawan Bharadwaj',
    position: 'Assistant Professor , ECE, NIE MYSORE',
    imgSrc: '/faculty_images/pawan.jpg',
  },
  {
    name: 'Dr.Divya S',
    position: 'Assistant Professor , EEE, NIE MYSORE',
    imgSrc: '/faculty_images/divyamam.jpg',
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
