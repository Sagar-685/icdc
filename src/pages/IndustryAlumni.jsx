import React from 'react';
import './AdvisoryCommittee.css';

const AdvisoryCommittee = () => {
  const industryMembers = [
    { name: 'Dr. Nisha Haridas', role: 'Senior Engineer, Qualcomm', link: 'https://www.linkedin.com/in/nisha-haridas-80138433' },
    { name: 'Dr. Supriya Unnikrishnan', role: 'Principal Engineer, Ignataruim', link: 'https://www.linkedin.com/in/supriya-unnikrishnan-76b10614' },
    { name: 'Dr. Nithin Thomas Abraham', role: 'Principal Design Engineer, GlobalFoundries India', link: 'https://www.linkedin.com/in/dr-nithin-thomas-abraham-ab304977/?originalSubdomain=in' },
    { name: 'Dr. Haripriya Kesavan', role: 'Staff Engineer-Device TCAD, Micron Technology', link: 'https://www.linkedin.com/in/haripriya-kesavan-b9532a29' },
    { name: 'Mr. Vijayakrishnan K K', role: 'Senior Staff Engineer, Infineon Technologies', link: '#' },
    { name: 'Mr. Edet Bijoy K', role: 'Digital IC Design Engineer, KaikuTek, Taiwan', link: 'https://www.linkedin.com/in/edetbk' },
    { name: 'Dr. Gayatri Parthasarathy', role: 'R&D, BEL', link: 'https://www.linkedin.com/in/gayatri-parthasarathy' },
    { name: 'Dr. Shaeen Kalathil', role: 'Princess Nourah Bint University, Saudi Arabia', link: 'https://www.linkedin.com/in/shaeen-k-a5587924' },
    { name: 'Dr. Deepak', role: 'CEWIT, IIT Madras', link: '#' },
    { name: 'Mr. Annangi Saikiran Babu', role: 'Deloitte Consultancy', link: 'https://www.linkedin.com/in/annangisaikiranbabu' },
    { name: 'Dr. Arjun Hari M', role: 'Facility Technologist, CeNSE-IISc-Bangalore', link: 'https://www.linkedin.com/in/arjun-hari-22ab176b' }
  ];

  const alumniMembers = [
    { name: 'Mr. Charan M S', role: 'Analog Layout Engineer, TI', link: 'https://www.linkedin.com/in/charan-m-s-bb2b25246/' },
    { name: 'Mr. Aniruddh Adiga', role: "Master's in Data Science, Texas A&M University", link: 'https://www.linkedin.com/in/aniruddh09' },
    { name: 'Saikiran Babu Annangi', role: 'Master’s Student, University of Washington', link: 'https://www.linkedin.com/in/annangisaikiranbabu/' },
    { name: 'Mr. Santhosh H S', role: 'AI Engineer & Data Scientist @ TCS-AI Lab', link: 'https://www.linkedin.com/in/santhosh-h-s-5014641b1/' },
    { name: 'Mr. Prabhanjana S K', role: 'Seimens Bangalore', link: 'https://www.linkedin.com/in/prabhanjana-sk/' },
    { name: 'Mr. Skanda Prasad', role: 'Cisco Bangalore', link: 'https://www.linkedin.com/in/skandaprasad11/' },
    { name: 'Ms. Sangeetha A Shayana', role: 'Schneider Electric, Bangalore', link: 'https://www.linkedin.com/in/sangeethaashayana/' },
    { name: 'Mr. Pundlik Anant', role: 'Analog Layout Engineer, TI', link: 'https://www.linkedin.com/in/pundlik-anant-nayak-786197225/' },
    { name: 'Ms. Raksha', role: 'Analog Layout Engineer, TI', link: 'https://www.linkedin.com/in/raksha-a-r-063289251/' },
    { name: 'Mr. Suhas Shastry H S', role: 'Associate Engineer, Morphing Machines', link: 'https://www.linkedin.com/in/suhasshastry60/' },
    { name: 'Mr. Amith N Bharadwaj', role: 'R&D Engineer, Tejas Networks Ltd.', link: 'https://www.linkedin.com/in/amith-bharadwaj-a87904241' },
    { name: 'Mr. Darshan Babu', role: 'Senior HW Engineer', link: 'https://www.linkedin.com/in/darshanbabuks' },
    { name: 'Mr. Gurusatwik Bhatta N', role: 'Project Associate', link: 'https://www.linkedin.com/in/gurusatwik-bhatta-n-280aa3164' },
    { name: 'Ms. Lekhana Gowlla', role: 'Trainee @ Mercedes Benz R&D', link: 'https://www.linkedin.com/in/lekhana-g' },
    { name: 'Ms. Ananya Murali Kashyap', role: 'MS Electrical Engineering, University of Pennsylvania', link: 'https://www.linkedin.com/in/ananya-murali-kashyap-a74b54201' },
    { name: 'Mr. G Adarsh', role: 'Associate Support Engineer, Blue Yonder India', link: 'https://www.linkedin.com/in/g-adarsh' }
  ];

  return (
    <section className="advisory-committee container">
      <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#015c9d' }}>
        ADVISORY COMMITTEE
      </h2>

      <div className="title">
        <h3>INDUSTRY</h3>
      </div>
      <div className="committee-container">
        {industryMembers.map((member, index) => (
          <div className="committee-card" key={index}>
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <h3>{member.name}</h3>
            </a>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <div className="title">
        <h3>ALUMNI</h3>
      </div>
      <div className="committee-container">
        {alumniMembers.map((member, index) => (
          <div className="committee-card" key={index + industryMembers.length}>
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <h3>{member.name}</h3>
            </a>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvisoryCommittee;
