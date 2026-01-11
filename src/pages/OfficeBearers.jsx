// OfficeBearers.jsx
import React, { useEffect, useRef, useState } from 'react';
import './OfficeBearers.css';

const officeBearers = [
 {
  name: 'Pooja KN',
  role: 'President',
  image: 'ob_images/Pooja KN.jpg',
},
{
  name: 'Disha',
  role: 'Vice-President',
  image: 'ob_images/Disha.jpg',
},
{
  name: 'Yashas Kumar',
  role: 'Treasurer',
  image: 'ob_images/Yashas kumar .jpg',
},
{
  name: 'Harsha B',
  role: 'Secretary & Event Committee lead',
  image: 'ob_images/HARSHA B.jpg',
},
{
  name: 'HN Rashmitha',
  role: 'Event Committee lead',
  image: 'ob_images/HN Rashmitha.jpg',
},
{
  name: 'Akash HA',
  role: 'Event Committee lead',
  image: 'ob_images/Akash H A.jpg',
},
{
  name: 'Nikhil K M',
  role: 'Event Committee lead',
  image: 'ob_images/NIKHIL K M.jpg',
},
{
  name: "Sinchana G",
  role: "Technial Committee Head",
  image: "ob_images/Sinchana G .jpg"
},
{
  name: "Nidhishree",
  role: "Technial Committee Head",
  image: "ob_images/Nidhishree.jpg"
},
{
  name: "Pavan Maruthi Mahale",
  role: "Technial Committee Head",
  image: "ob_images/Pavan Maruti Mahale.jpg"
},
{
  name: "Manjunath R",
  role: "Industry Visit & Project Committe lead",
  image: "ob_images/Manjunath R.jpg"
},
{
  name: "Pavan R",
  role: "Industry Visit & Project Committe lead",
  image: "ob_images/R Pavan.JPG"
},
{
  name: "Jeevan Kamsagar",
  role: "Industry Visit & Project Committe lead",
  image: "ob_images/Jeevan Kamsagar H.jpg"
},
{
  name: "Nesara",
  role: "Website & Social Media",
  image: "ob_images/Nesara N .jpg"
},
{
  name: "Tejasvi K",
  role: "Website & Social Media",
  image: "ob_images/TEJASVI K.jpg"
},
{
  name: "NEHA HS",
  role: "Design Committee lead",
  image: "ob_images/Neha H S.jpg"
},
{
  name: "NEHA S Kamal",
  role: "Design Committee lead",
  image: "ob_images/NEHA S.jpg"
},
{
  name: "Shreyansh Shrivatsav",
  role: "Design Committee lead",
  image: "ob_images/Shreyansh_Shrivastava.jpg"
},
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
