import React, { useState } from 'react';
import './Achievements.css';

const AchievementCard = ({ title, imgSrc, description, moreLink }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="menu-item-card">
      <img className="menu-item-image" src={imgSrc} alt={title} />
      <h3 className="menu-card-title">{title}</h3>
      {showMore && (
        <p className="card-description">{description}</p>
      )}
      <div className="readmore-container">
        {showMore && moreLink && (
          <a
            href={moreLink}
            target="_blank"
            rel="noreferrer"
            className="butn"
            style={{ marginRight: '10px' }}
          >
            More
          </a>
        )}
        <button className="butn" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Read less' : 'Read more'}
        </button>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="achievements-section">
      <h1 className="achievements-heading">ACHIEVEMENTS</h1>
      <div className="achievements-grid">
        <AchievementCard
          title="Basic Training in 3D Printing Technology-June 15 2024"
          imgSrc="/achivements_images/3dprint.jpg"
          description=" 🌟 Thrilled to Share the IW3DP NIE Chapter’s 3D Printing Training Experience! 🌟
          On June 15, 2024, 23 members of the IW3DP NIE Student Chapter attended a hands-on 3D printing training at CIT Bangalore, in collaboration with IW3DP Bangalore, AMSI, EOS, and Additive Learning.
          This dynamic session, led by Mr. Deepak Kumar V C and the EOS team, introduced students to cutting-edge 3D printing technologies and future possibilities in industries like aerospace and healthcare.
          A huge thanks to our mentors and supporters for making this innovative learning experience possible, with special appreciation to Shivani Singh for her tireless efforts!
                                              ."
          moreLink="https://www.linkedin.com/posts/remya-jayachandran-6b8aab1b3_excited-to-share-basic-training-in-3d-activity-7208467080684163072--Cj9"/>
           <AchievementCard
          title="KSCST SPP-47 series State level Best Project of the year award"
          imgSrc="/achivements_images/kscst.jpg"
          description="  Excited to share that my project students, Pundlik Anant, Raksha A R, Sangeetha Shayana, and Suhas Shastry won the State Level Best Project of the Year 2023-2024 Award by KSCST SPP 47 series with a cash prize. This is a significant achievement for these students, and it highlights their excellent work and contributions in the field of Electronics and Communication Engineering.
          This is a great milestone for the Department of Electronics and Communication Engineering at NIE Mysore. I’m very proud of my students' accomplishments. Their hard work and dedication have paid off, and this recognition will undoubtedly motivate them to continue excelling in their academic and professional pursuits.
           It's commendable that Sangeetha Shayana encouraged  Suhas Shastry to participate in the final round. Seizing opportunities, even for simple reasons, can lead to remarkable outcomes. This experience will undoubtedly be invaluable for my students, as it not only showcases their talents but also instills the importance of perseverance and determination.                                               
            Congratulations once again, Pundlik Anant, Raksha A R, Sangeetha Shayana, and Suhas Shastry on this well-deserved achievement. Your department's success is a testament to the quality of education and the exceptional guidance provided by the faculties. This award will undoubtedly inspire other students to strive for excellence and contribute to the growth and reputation of the institution.
            We are thankful to our esteemed Evaluators from KSCST SPP, our SPP coordinator Dr. Balaji sir, NIE Mysore."
          moreLink="https://www.linkedin.com/posts/remya-jayachandran-6b8aab1b3_excited-to-share-that-my-project-students-activity-7228265185025699840-SePq/"/>
        <AchievementCard
          title="WITFLUENCE 2024 by WEQUITY"
          imgSrc="/achivements_images/wit.jpg"
          description="  We are excited to invite your institution to WITFLUENCE 2024, a dynamic conference bringing together women technology leaders, now extended to students and faculty.
           Event Highlights:
             - Connect with top industry leaders and build meaningful networks.
             - Attend expert-led sessions from Microsoft and other tech giants.
            - Participate in workshops designed to sharpen your soft skills.
             - Benefit from personalized speed mentoring with seasoned professionals.
             - Explore corporate stalls for job and internship opportunities.
              For educational institutions, we offer a special package at INR 10,000, covering 2 faculty members and 8 female students. Don't miss this opportunity to engage, learn, and grow at WITFLUENCE 2024!"
          moreLink="https://www.linkedin.com/posts/nidhi-shree-b11819328_innovation-techexhibits-witfluence2024-activity-7245465350207680512-evyz"/>
        <AchievementCard
          title="National Level 24-Hour Circuit-A-Thon"
          imgSrc="/achivements_images/circutathon.jpg"
          description=" DECCTEROUS IC Design Club Triumphs at IEEE DSCE’s 24-Hour Circuit-A-Thon!

Two teams from the DECCTEROUS IC Design Club recently participated in the National Level 24-Hour Circuit-A-Thon organized by the IEEE DSCE Student Branch, held on 23rd and 24th November at Dayananda Sagar College of Engineering, Bangalore. The event attracted 106 participants and was divided into three specialized domains:

Embedded Systems – bringing ideas to life with platforms like Arduino and ESP32.
Digital VLSI – transitioning from design to FPGA.
Analog Design – from MOS fundamentals to GDSII.
Our club members shone brightly in the Analog Design category with two remarkable projects:

Third Prize (Analog Circuit Design): Sudeep Kumar, Varshini H R, Sanjay H, and PrekshaDeep from fifth Semester ECE secured third place with their innovative Memristor Emulator Circuit Design for Neuromorphic Computing which is their minor project. Their work impressed the judges and earned them third prize in Analog Domain.

Appreciation for Excellence: Harshitha B H, Satyadutt M S, and Neha M N representing the third semester ECE students, presented their project on the CMOS Low Dropout Voltage Regulator. Their dedication and hard work earned them special appreciation from the jury panel.

Both projects were guided by Dr. Remya Jayachandran, (Senior IEEE Member), NISB CAS Faculty Advisor and Assistant Professor in ECE at NIE Mysore. A huge congratulations to our talented students for their innovative contributions and for representing DECCTEROUS IC Design Club with excellence at such a prestigious event!

Dr. Remya Jayachandran,                                                                                                                                                            Dr. Salila Hegde      "
          moreLink="https://www.linkedin.com/posts/remya-jayachandran-6b8aab1b3_deccterousicdesginclub-niemysore-activity-7266444470642991104-lWGX?utm_source=share&utm_medium=member_desktop"/>
       
        <AchievementCard
          title="PARYAVARAN-2024 organized by INAE Bangalore Chapter and Gokula Education Foundation"
          imgSrc="/achivements_images/paryavran.jpg"
          description=" The One-day workshop on Environment and Green Energy: PARYAVARAN-2024 was organized by the INAE Bangalore Chapter in collaboration with Gokula Education Foundation. This event focuses on raising awareness and promoting innovative solutions related to environmental conservation and sustainable energy.
          Key topics include:
          - Renewable energy technologies and their impact on reducing carbon footprints.
           - Discussions on environmental protection and sustainable development strategies.
          - Workshops and expert sessions on the latest advancements in green energy, including solar, wind, and bioenergy.           
          The event aims to inspire students, researchers, and professionals to contribute towards a greener and more sustainable future through knowledge sharing and hands-on learning.
                                              "
          moreLink="##"/>   
        <AchievementCard
          title="Student Research Symposium 2024 (SRS'24)"
          imgSrc="/achivements_images/srs24.jpg"
          description=" 🌟 Proud Moments for IC Design Club DECCTEROUS at SRS'24! 🌟
           Our students participated in the Student Research Symposium 2024 (SRS'24), organized by IIT Indore with IEEE. The theme was Advancements in Emerging Technologies🌟 Proud Moments for IC Design Club DECCTEROUS at SRS'24! 🌟
           Our students participated in the Student Research Symposium 2024 (SRS'24), organized by IIT Indore with IEEE. The theme was Advancements in Emerging Technologies.       
           Around 35 ECE students from NIE Mysore showcased their talents in various events. Harshitha B M won the Best Slide Design award, while Ananya D M, Dhanyashree D, Disha R S, and Anagha MK were Runners-up in Model Presentation.
            Congrats to all, especially Pavan, Saloni & team, for their hard work! A great achievement for our club
            Around 35 ECE students from NIE Mysore showcased their talents in various events. Harshitha B M won the Best Slide Design award, while Ananya D M, Dhanyashree D, Disha R S, and Anagha MK were Runners-up in Model Presentation.
            Congrats to all, especially Pavan, Saloni & team, for their hard work! A great achievement for our club!   ."
          moreLink="https://www.linkedin.com/posts/remya-jayachandran-6b8aab1b3_we-are-delighted-to-share-that-the-students-activity-7248700161269399552-HU-w"/>   
      </div>
    </div>
  );
};

export default Achievements;
