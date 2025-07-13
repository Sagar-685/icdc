// OfficeBearers.jsx
import React, { useEffect, useRef, useState } from 'react';
import './OfficeBearers.css';

const officeBearers = [
 {
  name: 'Sujala B R',
  role: 'President',
  image: 'ob_images/Sujala-B-R.jpg',
},
{
  name: 'Sanjay Hanchinal',
  role: 'Vice-President',
  image: 'ob_images/sanjay.jpg',
},
{
  name: 'Bheema K S',
  role: 'Secretary',
  image: 'ob_images/bheema.jpg',
},
{
  name: 'Shesha Krishna',
  role: 'Treasurer',
  image: 'ob_images/shesha.jpg',
},
{
  name: 'Preksha',
  role: 'Registration Head',
  image: 'ob_images/preksha.jpg',
},
{
  name: 'Vaishnavi Purshottam',
  role: 'Registration Head',
  image: 'ob_images/vaishnavi.jpg',
},
{
  name: 'DhanyaShree',
  role: 'Registration Head',
  image: 'ob_images/dhanya.jpg',
},
{
  name: 'Thanushree M S',
  role: 'Event Organizers',
  image: 'ob_images/thanushree.jpg',
},
{
  name: 'Shrilakshmi',
  role: 'Event Organizers',
  image: 'ob_images/lakshmi.jpg',
},
{
  name: 'Skandan Bharadwaj K',
  role: 'Publicity,Marketing,Sponsorship',
  image: 'ob_images/skandan.jpg',
},
{
  name: 'Satyadutt M S',
  role: 'Publicity,Marketing,Sponsorship',
  image: 'ob_images/satya.jpg',
},
{
  name: "Jayesh Gidwani",
  role: "Technial Head",
  image: "ob_images/jayesh.jpg"
},
{
  name: "Nidishree",
  role: "Technial Head",
  image: "ob_images/nidhi.jpg"
},
{
  name: "Adrutha",
  role: "Project & Industry Visit",
  image: "ob_images/adrutha.jpg"
},
{
  name: "Pranav",
  role: "Project & Industry Visit",
  image: "ob_images/pranav.jpg"
},

{
  name: "Vishanth",
  role: "Project & Industry Visit",
  image: "ob_images/vishanth.jpg"
},
{
  name: "Shraddha",
  role: "IdeaLab Projects",
  image: "ob_images/shraddha.jpg"
},
{
  name: "Shivabasavesh",
  role: "IdeaLab Projects",
  image: "ob_images/shiva.jpg"
},
{
  name: "Mourya",
  role: "IdeaLab Projects",
  image: "ob_images/Mourya P.jpg"
},
{
  name: "Parshuram",
  role: "Website & Social Media",
  image: "ob_images/parshuram.jpg"
},
{
  name: "Sagar Kumar Singh",
  role: "Website & Social Media",
  image: "ob_images/sagar.jpg"
},
{
  name: "Anagha",
  role: "Website & Social Media",
  image: "ob_images/anagha.jpg"
},
{
  name: "Harshitha B M",
  role: "Website & Social Media",
  image: "ob_images/harshitha.jpg"
},
{
  name: "Varshini H R",
  role: "Hospitality",
  image: "ob_images/varshini.jpg"
},
{
  name: "Neha S",
  role: "Hospitality",
  image: "ob_images/neha.jpg"
},
{
  name: "Hemashree",
  role: "Hospitality",
  image: "ob_images/hemashree.jpg"
},
{
  name: "Prekshadeep",
  role: "Design Creation",
  image: "ob_images/prekshadeep.jpg"
},
{
  name: "Shreyansh Shrivatsav",
  role: "Design Creation",
  image: "ob_images/shreyansh.jpg"
},
{
  name: "Aishwarya",
  role: "Coding & Programming",
  image: "ob_images/aishwarya.jpg"
},
{
  name: "Pankaja",
  role: "Coding & Programming",
  image: "ob_images/pankaja.jpg"
},
{
  name: "Mehul J",
  role: "Coding & Programming",
  image: "ob_images/mehul.jpg"
},
{
  name: "Sanjana",
  role: "Stage Committee",
  image: "ob_images/sanjana.jpg"
},
{
  name: "Harsha B",
  role: "Stage Committee",
  image: "ob_images/harsha.jpg"
}
];

const OfficeBearers = () => {
  const carouselRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (scrollX >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setScrollX(0);
        } else {
          container.scrollBy({ left: 300, behavior: 'smooth' });
          setScrollX((prev) => prev + 300);
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [scrollX]);

  return (
    <div className="container1">
      <h1>OFFICE BEARERS</h1>
      <div className="office-bearers" ref={carouselRef}>
        {officeBearers.map((person, index) => (
          <div className="profile" key={index}>
            <img src={person.image} alt={person.name} />
            <p className="name">{person.name}</p>
            <p className="role">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeBearers;
