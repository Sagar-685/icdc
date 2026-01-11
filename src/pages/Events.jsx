import React, { useState } from 'react';
import './Events.css';

// // Optional — remove if not used
// const EventCard = ({ title, date, children }) => {
//   const [expanded, setExpanded] = useState(false);
//   return (
//     <div className={`event-card ${expanded ? 'expanded' : ''}`}>
//       <div className="event-header" onClick={() => setExpanded(!expanded)}>
//         <h3>{title}</h3>
//         <span>{date}</span>
//         <button className="toggle-btn">{expanded ? '−' : '+'}</button>
//       </div>
//       {expanded && <div className="event-details">{children}</div>}
//     </div>
//   );
// };

const QuizCard = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/quiz_1.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Quiz Competition 1 - June 01 2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          The quiz competition covered a variety of topics, including Electronics and Circuit Design, testing participants' knowledge of basic components and circuit analysis. Microcontrollers and Embedded Systems were also explored, with a focus on ARM microcontrollers and IoT applications. Programming and Algorithms challenged students on C/C++ syntax, data structures, and algorithm optimization. The quiz also featured questions on Technology Trends, highlighting advancements in AI, IoT, 3D printing, and VLSI. A section on General Science and Technology included topics like space exploration and breakthroughs in renewable energy. This diverse range of subjects made for an engaging and informative event.
        </p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://drive.google.com/drive/folders/1iqL9hy9wxurjPODLC3pUEFcjqCPF4uaP?usp=drive_link"
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
const Explearn = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/explearn.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Experiential Learning Activity – Linear Integrated Circuits - May 8 2025</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          Experiential Learning Activity – Linear Integrated Circuits
 Topic : Filters, Op-Amp linear Circuits, DAC, Application ICs

I'm excited to announce the successful completion of an Open Book Exam conducted for fourth-semester students, ECE, NIE Mysore as part of our Active Learning methodology under the subject Linear Integrated Circuits.
🔍 Exam Highlights:
Six distinct sets of questions were prepared, each set containing 6 questions designed at Bloom’s Levels L2, L3, and L4.
Topics covered: Filters, Op-Amp Circuits, Digital-to-Analog Converters (DACs), and Application-specific ICs.
👥 Team-Based Learning:
Students were grouped into six teams, each given 90 minutes to collaboratively analyze and solve their question set.
The open book format encouraged critical thinking, peer learning, and concept application.
🛠️ Hands-On Exploration:
Several teams used circuit simulators to verify design-based questions, demonstrating initiative in validating their understanding through practical tools.
This engaging approach not only deepened their conceptual understanding but also enhanced teamwork, problem-solving, and application skills—hallmarks of experiential learning.

Big thanks to my students for attending the open book exam. 
I would like to thank Datta kumar Sir and NIE- TLC for the encouragement, motivation and criticism to improvise our teaching. This is an activity under NIE- TLC - Teaching and Learning Center organized by Deccterous NIE- IC Design Club.
        </p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_iucee-nie-nietlc-activity-7327571870545780736-z-Sm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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

const InaugurationCard = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/club_inaug.jpg"
        alt="Club Inauguration"
      />
      <h3 className="menu-card-title">Club Inauguration - July 6th 2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          We are thrilled to announce the official inauguration of our Integrated Circuit Design student club, "DEECTEROUS," on July 6, 2024 by Department of ECE. The primary goal of this club is to strengthen the foundational knowledge of students in Electronics & Communication Engineering. The event was graced by our *Alumni Mr. Charan M S (Texas Instruments), Mr. Prabhanjana S K (Seimens) , Mr. Pundlik Anant Nayak (Texas Instruments), and Sangeetha Shayana (Schneider Electric), who are proud alumni of NIE. The collaborative efforts of our first-year and second-year students were instrumental in making the inaugural function a resounding success.
          Our heartfelt gratitude goes to Dr. Nisha Haridas (VLSI, Qualcomm), Dr. Supriya Unnikrishnan (VLSI, Ignataruim), Mr. Vijayakrishnan K K (Infineon), and Mr. Edet Bijoy (Digital IC DesignEngineer, Taiwan) for their generous contributions of Technical books as gifts for the students. A special acknowledgment to Dr. Salila Hegde, whose passion and dedication as a faculty member in our ECE department have been pivotal in bringing this student club to life.
          We extend our heartfelt gratitude to Dr. Rohini Nagapadma, Principal of NIE Mysore, and Dr. Narasimha Kaulgud, Professor of ECE, Dr. Parameshwara S, HoD , ECED at NIE Mysore, for their unwavering support and encouragement.
          Special thanks to AICTE NIE IDEALAB for the constant support for promoting the student projects and collaborating with our student club.
          A special shout-out to our first and second-year ECE students for their hard work, teamwork, passion, creativity, and dedication. Your collective efforts have been truly remarkable. The first activity of the DEECTEROUS was conducted on the same day, Innovation and Design thinking Project Prototype Exhibition by First year ECE students. The projects were evaluated by our Alumni and Dr. Narasimha Kaulgud sir. Regards Dr. Salila Hegde (Associate Professor, ECED) Dr. Remya Jayachandran (Assistant Professor , ECED) IC Design Club- "DEECTEROUS Faculty Coordinators
        </p>
      )}
      <div className="readmore-container">
        {showMore && (
          <a
            href="https://drive.google.com/drive/folders/1bgp7PFZlFbojw8ndbB1UcXipxcefhUBX?usp=drive_link"
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
const Idt = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/idt.jpg"
        alt="Club Inauguration"
      />
      <h3 className="menu-card-title">Innovation & Design Thinking Project Exhibition-July 06 2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          Innovation and Design Thinking Project Evaluation and Exhibition - A Showcase of Creativity and Problem-Solving
          The Integrated Circuit Design Club – “DECCTEROUS” in collaboration with NIE AICTE Idealab, hosted the Innovation and Design Thinking Project Evaluation and Exhibition for the second-semester ECE students on 6th July 2024. External evaluators for this event included Mr. Prabhanjana S K from Siemens (NIE 2023 pass out), Mr. Charan M S from Texas Instruments (NIE 2023 pass out), Mr. Pundlik Anand Nayak from Texas Instruments (NIE 2024 pass out) and Ms. Sangeetha Shayana from Schneider Electric (2024 pass out). This initiative formed an integral part of experiential learning in Innovation and Design thinking, aligned with the second-semester Innovation and Design Thinking Course (BIDTK258).
          The internal evaluators for the event were Prof. Narasimha Kaulgud, Dr. Gurumurthy, and Dr. Remya Jayachandran. Students were encouraged to engage in technical documentation and project demonstration, providing them with valuable skills for their future semesters. The event coordinators were Dr. Salila Hedge, Associate Professor, ECED, and Dr. Remya Jayachandran, Assistant Professor, ECED.
          Over the past semester, our students have immersed themselves in understanding societal issues, defining the problem statement, and principles of design thinking, and exploring innovative solutions to real-world challenges. Through a dynamic process of empathy, ideation, prototyping, and testing, they have developed projects demonstrating their creativity, problem-solving skills, and commitment to making a positive impact.
          Themes
          1. Waste Management & Recycling/Reuse
          2. Challenges in NICU
          Hearty Congratulations to our students for their dedication and effort
          NICU PROJECT-
          FIRST PRIZE - Priya R, and team - Team No.2B,
          Second Prize - Suyajnaa and team - Team No. 13B,
          Third prize - Vishanth and team - team no. 4B, Shrilakshmi and team -team No.5B
          WASTE MANAGEMENT PROJECTS-
          FIRST PRIZE - Neha S Kamal and team - team no. 6A,
          Second prize - Harsha B and team- Team No. 2A,
          Third Prize - Dhanayashree & team- No. 3A, Advaith & team -No.5A, Vikas & team -Team No. 10B
        </p>
      )}
      <div className="readmore-container">
        {showMore && (
          <a
            href="https://drive.google.com/drive/folders/1qZbUWs3QjuEPsUtstcmKAw8SdNuigO2_?usp=drive_link"
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
const Pcb = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/pcb.jpg"
        alt="Club Inauguration"
      />
      <h3 className="menu-card-title">PCB Design and Microcontrollers Workshop-September 02-06 2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          From September 2nd to 6th, we hosted a hands-on workshop focused on PCB Design and ARM Microcontrollers, where students gained practical insights into circuit design and microcontroller programming. The workshop, facilitated by experienced professionals, covered key topics such as PCB layout, schematic design, and coding ARM-based microcontrollers. It was a valuable learning experience for students looking to develop their skills in embedded systems and hardware design, with real-world applications explored throughout the sessions.
        </p>
      )}
      <div className="readmore-container">
        {showMore && (
          <a
            href="https://drive.google.com/drive/folders/1bgp7PFZlFbojw8ndbB1UcXipxcefhUBX?usp=drive_link"
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
const Orientation = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/orientation.jpg"
        alt="Club Inauguration"
      />
      <h3 className="menu-card-title">Orientation Program-October 19-10-2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          We are pleased to announce that the Students Club of ECE - DECCTEROUS - IC DESIGN CLUB hosted an orientation program and technical events for first-year students on 19/10/2024. Dr. Divakar, Professor and Chief Mentor, and Dr. Anand A, Faculty Co-coordinator of NIE AICTE IDEALAB were the Chief Guests of this program. As part of the club activity, a daily technical quiz at 5 pm for first, second, and third-year students is conducted. The top scorers were awarded with technical books as prizes. Furthermore, the website for the student club is developed by Parasuram and Sagar, Students of NIE, which was launched during the orientation program. 
          Following the orientation program, various activities such as technical quizzes, crosswords, circuit building, scribbles, and blackhands were organized for first-year students. The event culminated with a Treasure Hunt organized by the third-year students of the IC Design club. Our gratitude goes to Prof. Divya S from the EEE Department for her involvement in the IC Design Club, as well as to Dr. Parameshwara S, HoD of the ECED department, and NIE AICTE IdeaLab for their support and guidance in organizing student activities through DECCTEROUS - IC Design Club. We also extend our thanks to the Student coordinators for their tremendous effort in making this event a great success                                                                                           Faculty Coordinators                                                                                     Dr.SalilaHegde                                                                                        
          Dr. Remya Jayachandran
        </p>
      )}
      <div className="readmore-container">
        {showMore && (
          <a
            href="https://drive.google.com/drive/folders/1be863IfR9uapMFVuIJLP7o1yK3JQf07y?usp=sharing"
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
const Print = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/print.jpg"
        alt="Club Inauguration"
      />
      <h3 className="menu-card-title">3D Printing workshop 15-11-2024 and 16-11-2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
         We are excited to announce that the NIE-IW3DP Student Chapter successfully organized a two-day 3D Printing Workshop for Girls on 15th and 16th November 2024, in collaboration with the NIE AICTE IDEA Lab and the DECCTEROUS – IC Design Club, ECE Dept..
         This workshop, aimed at empowering and educating girls in the rapidly growing field of 3D printing and additive manufacturing, provided participants with essential hands-on experience and insights into the technology’s applications across various industries. The primary goal of this initiative was to inspire and equip young women with the knowledge and skills to excel in the tech and engineering sectors, helping to bridge the gender gap in these fields.
         We extend our sincere gratitude to Dr. Anand A, Coordinator of NIE AICTE IDEA Lab, for serving as the resource person for the workshop. We would also like to express our appreciation to Dr. Parameshwara S, Head of the Department of Electronics and Communication Engineering, for his unwavering support in making this workshop a reality. We also thank Prof. Narasimha Kaulgud sir for the support for setting up the lab to conduct the workshop. We also thank our student coordinators Varshini H R ( Deccterous IC Design Club & IW3DP Student member), Shivani Singh (Student Chair, NIE IW3DP Student chapter), Sinchana H (IW3DP Student member) and Rakshita (NIE IW3DP student member) for their dedication and effort in arranging this workshop. We also thank our students who successfully completed the two days training program.                              
         Through this initiative, we hope to spark curiosity and foster innovation, empowering more girls to explore and thrive in the exciting world of 3D printingtechnology.
        </p>
      )}
      <div className="readmore-container">
        {showMore && (
          <a
            href="https://www.linkedin.com/posts/remya-jayachandran-6b8aab1b3_we-are-excited-to-announce-that-the-nie-iw3dp-activity-7264554922740785156-Yf-C?utm_source=share&utm_medium=member_desktop"
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
const Cadence = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/cadence.jpg"
        alt="Club Inauguration"
      />
      <h3 className="menu-card-title">Analog VLSI Circuit Design and Analysis using the Cadence Virtuoso Tool-November 23, 2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          We are excited to announce that the Deccterous IC Design Club from the Department of Electronics and Communication Engineering successfully conducted hands-on workshop on "Analog VLSI Circuit Design and Analysis using the Cadence Virtuoso Tool" on November 23, 2024 which is the continuation of the workshop conducted on 9th November 2024. This workshop is specifically designed for our fifth-semester students which is part of the VLSI Workforce Development program in CMOS Circuit Design and Analysis, initiated by the IC Design Club- DECCTEROUS.  
          Please note that the VLSI workshop series will continue on Saturdays, allowing students to focus intensively on circuit analysis.                         
          We would like to express our gratitude to our Head of Department, Dr. S. Parameshwara, for his unwavering support and encouragement to organize the workshop.                                
           Thank you       Dr. Salila Hegde    Dr. Remya Jayachandran
        </p>
      )}
      <div className="readmore-container">
        {showMore && (
          <a
            href="https://drive.google.com/drive/folders/1bgp7PFZlFbojw8ndbB1UcXipxcefhUBX?usp=drive_link"
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
const Careerguidance = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/career.jpg"
        alt="Club Inauguration"
      />
      <h3 className="menu-card-title">Career Guidance Program-september 28 2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          Our club is dedicated to fostering professional growth alongside technical expertise. Through our Career Guidance Programs, we provide members with the tools and knowledge to succeed in their chosen fields. Guest speakers from various industries, share their insights on career paths, interview preparation, and skill development. The goal is to equip our members with the confidence and clarity needed to excel in their professional journeys.
        </p>
      )}
      <div className="readmore-container">
        {showMore && (
          <a
            href="https://drive.google.com/drive/folders/1qZy4luRiR98EPKJdq0j4oPVkpzBHjnnr?usp=drive_link"
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
const Posterdesign = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/posterdesign.jpg"
        alt="Club Inauguration"
      />
      <h3 className="menu-card-title">Technical Digital Poster Design Competition-November 30 2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          🌟 Final Round of Technical Digital Poster Presentation Competition (Theme: Active & Passive Components) 🌟 
          We are excited to announce the successful conclusion of the final round of the ⭐ Technical Digital Poster Presentation Competition ⭐ on the theme of Active & Passive Components, organized by the DECCTEROUS IC Design Club of the ECE Department, in association with NIE AICTE IDEALAB.
                                    Panel of Judges: Mr. Amith N. Bharadwaj (TEJAS Networks, 2024 NIE), Mr. Gurusatwik Bhatta N (IISc Bangalore, 2024 NIE), Prof. Divya S (Assistant Professor, EEE Department), Dr. Salia Hegde (Associate Professor, ECE Department)
                                    A total of 18 posters were submitted for the competition, which was launched in June 2024. After a thorough review by industry experts, including Dr. Supriya Unnikrishnan, Senior VLSI Engineer at Ignitarium, Senior IEEE Member, Dr. Remya Jayachandran, Senior IEEE Member, 9 posters were shortlisted for the final round. The feedback from these experts was shared with participants in the first week of November, and they were given time to revise their content accordingly.
                                    This event, part of the Experiential Learning of Analog Electronics Circuits Theory and Lab, allowed participants to showcase their knowledge in electronic component identification, packaging details, and technical specifications. We were impressed with the level of participation and the innovative ideas presented by the students. Notably, this Digital Poster Presentation format is being conducted for the first time.
                                    
                                    We would like to express our sincere gratitude to the Technical Advisor for this event, Prof. Saragur Narasimhan, Mr. Edet B K and to all the evaluators for their invaluable contribution to the success of this competition.
                                    We also appreciate the presence of Dr. Narasimha Kaulgud, Dr. Anjanappa C, Prof. Anand Srivatsava and Prof. Nitesh K A for gracing the event with their presence. 
                                    
                                    We would like to extend a special thanks to the Student Coordinator for this event, Prekshadeep, for her dedication and hard work in making this event a success. 
                                    We also want to give a special mention to our Vice President of the Deccterous IC Design Club, Sanjay H, for his outstanding efforts in organizing the event and taking on his responsibilities with great professionalism, and ICDC IdeaLab coordinators: Shivabasavesh, Shradda, Shrilakshmi, Manjunath Thanushree M S for their support to conduct this event smoothly
                                    We are truly proud to have you all as part of our IC Design Club. Your contributions have been invaluable! Big thanks to all who involved in this event to make it a grand success.
                                    ☀️ Winners:
                                     First Prize: Artistic Avengers 
                                     Second Prize: Tech Transformers 
                                     Third Prize: Tech Art Designers 
                                    We look forward to more such opportunities for our students to showcase their talents and innovative ideas!
                                    hashtag#DeccterousNIE hashtag#NIEMysore hashtag#NIEAICTEIdealab
                                    Faculty Coordinators
                                    DECCTEROUS - IC Design Club
                                    Dr. Salila Hegde
                                    Dr. Remya Jayachandran
        </p>
      )}
      <div className="readmore-container">
        {showMore && (
          <a
            href="https://www.linkedin.com/posts/remya-jayachandran-6b8aab1b3_deccterousnie-niemysore-nieaicteidealab-activity-7269231124218822656-Tcvx?utm_source=share&utm_medium=member_desktop"
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
const Analog = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/analog.jpg"
        alt="Club Inauguration"
      />
      <h3 className="menu-card-title">Analog Design Competition-December 21 2024</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          🎉 Successful Completion of Analog Circuit Design Competition - "The Analog Showdown"!🎉
             We are excited to announce the successful conduction of the Analog Circuit Design Competition - "The Analog Showdown" for our third-semester ECE students, organized by DECCTEROUS - IC Design Club, ECE, in association with NIE AICTE IDEALab on 21st December 2024 🙌💡                       
              The event was a tremendous success, with 43 Analog circuit projects competing for top honors. A big congratulations to all participants for their creativity and outstanding performance! 🏆👏                        
             This competition was an integral part of the Experiential Learning of Analog Circuit Design theory and lab courses. The event kicked off with a keynote address on "Big Picture of Electronics and Communication - Product Design" by Mr. Sunil Shambhatnavar, CEO of Advanced Electronic Systems.
             A special thanks to our esteemed industry jury:
             Mr. Jayanth K (AMD)
                                    Mr. Charan M S (Analog Layout Engineer, TI)
                                    Mr. Prabhanjana (Software Developer, Siemens Bangalore)
                                    Ms. Sangeetha Shayana (Schneider Electric)
                                    Mr. Suhas Shastry (Morphing Machines)
                                    And our academic jury:
                                    
                                    Dr. Manjula (NIE North Campus)
                                    Prof. Raghavendra (NIE North Campus)
                                    Prof. Divya S (EEE)
                                    Prof. Pawan B (ECE)
                                    Prof. Pushapalatha (ECE)
                                    A big thanks the Student Coordinators - Bheema K S and Disha L (fifth semester students), and everyone who contributed to making this competition an enriching experience for all! 💼🔧
                                    
                                    Main Highlight: A special mention to our fifth-semester students, who served as mentors for the third-semester projects. This collaboration enabled the fifth-semester students to engage with and guide their juniors in circuit analysis, fostering a sense of teamwork and knowledge-sharing. 🤝
                                    
                                    Special thanks to NIE TLC, and IUCEE for their motivation to implement active learning methods, bridging the gap between academics and industry.
                                    
                                    Congratulations to the winners of The Analog Showdown 2024 🏆 :
                                    
                                    Panel 1 (IDEA Lab): Smart Temperature Fan Control by Harsha B & Devi Prasad.
                                    Panel 2 (IoT Lab): Bind the Notes by Neha M N, Punyashree, Neethu.
                                    Panel 3 (AEC Lab): Motor Direction Control using H-Bridge by Pranav, Mahadev, Akash.
                                    Panel 4 (ADC Lab): 4:1 MUX using Discrete Components by Scholarson, Shreyansh, Satish, Sagar.
                                    Panel 5 (ASP Lab): Temperature Controlled DC Motor Fan by Shravani S, Sahana, Sadiya, Shwetha.
                                    Special Award : Buck Converter by Surya, Hemanth, Nikhil, and Adarsh.
                                    
                                    Best Student performance award: Vishanth, Satyadatt, Vishwanath Sarapur, Pavan R, Harshitha B M, Sampreeth for their Outstanding performance in The Analog Showdown 2024
                                    
                                    A heartfelt thank you to all the participants who showcased their talent and creativity. Your enthusiasm and dedication made this event truly inspiring and successful. 🙌💪
                                    The event’s collaborative spirit and exceptional projects made the event a resounding success, truly living up to its motto: "Where Ideas Ignite & Circuits Compete!" 💡⚡
        </p>
      )}
      <div className="readmore-container">
        {showMore && (
          <a
            href="https://www.linkedin.com/posts/deccterous-nie_niemysore-nietlc-nieaicteidealab-activity-7278384617458450432-qCiM?utm_source=share&utm_medium=member_desktop"
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

const Armtrain = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/armtrain.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Faculty Development Program on ARM-based Microcontroller & Hardware Interfacing - 10th to 14th February 2025 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          We are excited to share that our IC Design Club - DECCTEROUS organized a 5-day Faculty Development Program (FDP) on "ARM-based Microcontroller and Hardware Interfacing" in association with AICTE NIE IDEALAB from 10th to 14th February 2025 at NIE Mysore. 🎓
The program covered a wide range of topics, including:
 ARM-based microcontroller architecture
 Hardware interfacing techniques
 Embedded systems design
 Hands-on sessions to deepen our understanding of ARM technology and interfacing components

It was a fantastic knowledge-sharing platform!
A special thanks to Dr. Salila Hegde (Coordinator of FDP) , whose dedication to sharing her expertise made a significant impact. We are fortunate to have such a committed faculty member in our college. 👏
We also had the privilege of hearing a keynote session from Mr. Chandrashekar B S, Senior Architect at Accenture, who shared valuable insights into embedded architecture design and the importance of assembly-level programming knowledge. 🙏
A big thanks to all the participants for their active involvement throughout the program!
We also extend our gratitude to our HoD for their unwavering support and for sharing their invaluable knowledge with the participants.
A special mention to Prof. Pushapalatha Ma'am for her hands-on guidance and ensuring participants could apply what they learned.
Hats off to our dedicated student volunteers, and a special thanks to Bheema and Jayesh for their active involvement during the FDP.
Looking forward to organizing more informative sessions for both students and faculty. 📚
Keep learning, keep growing! 🌱
        </p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_fdp-arm-microcontroller-activity-7296862148469604352-IpH-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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

const Wie = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/wie.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title"> Empowering Women with Skills & Entrepreneurshi - Empowering Women with Skills & Entrepreneurship</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          🌸 Accelerate Action: Empowering Women with Skills & Entrepreneurship 🌸
IEEE WIE Bangalore Section, in association with DECCTEROUS- IC Design Club & CICC, The National Institute of Engineering, Mysore, proudly celebrated International Women’s Day 2025 with two days of impactful sessions, hands-on experiences, and inspiring discussions on 7th & 8th March 2025.
Day 1: Learning from Women Entrepreneurs
A field visit to the women-led confectionery unit, Sovereign Food Specialities in Belavadi, Mysore, gave students firsthand exposure to entrepreneurship in the food industry. Specializing in chocolates, pastries, and baked treats, the unit stands as a testament to women’s success in business. The visit provided valuable insights into:
 ✔ Women Entrepreneurship
 ✔ Bakery Industry Operations
 ✔ Career & Skill Development
 ✔ Financial Independence
 ✔ Leadership & Teamwork
The day also featured an awareness talk on Women’s Healthcare by Dr. Rashmi A., Physician, Aishani Clinic, Mysore, focusing on essential health issues and preventive care for women.
Day 2: Insights & Empowerment
The event continued with a powerful panel discussion and expert talks by distinguished women leaders:
 💡 Ms. Poornima Dabekar , Self-made women entrepreneur on “The Secret Ingredient: Family Support in Women’s Entrepreneurial Journey in the Food Industry”
 💡 Dr. Anjana Shashi Kiran , Soft skill Trainer, “Beyond Talent: Soft Skills That Elevate Women in the Workplace”
 💡 Dr. Rohini Nagapadma , Principal, NIE, Mysore, “Women in Academic Excellence: Overcoming Challenges, Celebrating Success”
Beyond Discussions: A Celebration of Women
🎉 Women-led food & Mehendi stalls – A platform to support women-led initiatives.
 🎉 Fun activities & games – Because every celebration needs joy and laughter!
As we embrace the theme "Accelerate Action", we recognize the importance of breaking barriers, challenging biases, and fostering women’s empowerment in technology, entrepreneurship, and leadership.
A big thank you to our speakers, participants, and organizers for making this event a huge success! 💜✨
        </p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_icwiewomensday-icwiephotocontest-iwd2025-activity-7304847958246572032-Nxx_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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
const Symposium = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/symposium.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">  NIE Student Research Symposium 2025 - 17/05/2025</h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          🎓🔬 Announcing the NIE Student Research Symposium 2025! 🔬🎓
 Organized by DECCTEROUS IC Design Club, Department of ECE, NIE Mysuru

We are thrilled to share the success of the NIE Student Research Symposium 2025 — a dynamic platform that brought together young innovators to present their groundbreaking research papers and projects in Electronics and Communication Engineering, IC Design, and emerging technologies.
🗓️ Day 1: 17/05/2025 – Technical Paper Presentations
Participants showcased innovative research across five tracks. Here's a look at the winners:
Track 1
 🏅 Best Paper: Ann Maria Jestine and team
 🎖 Special Award: Vinay Gowda and team, M S Varsha and team
Track 2
 🏅 Best Paper: Rashmi R and team
 🎖 Special Award: S Sudeep Kumar and team
Track 3
 🏅 Best Paper: Nidhishree and team
 🎖 Special Award: Hemashree
Track 4
 🏅 Best Paper: Pushpa M and team
Track 5
 🏅 Best Paper: Pooja and team
 🎖 Special Award: Pavan R and team

🛠️ Day 2: Project Exhibition
Participants demonstrated hands-on applications in Analog Circuit Design. 
Jury members: DARSHAN BABU K S, Sangeetha A Shayana Skanda Prasad, Lekhana G, Prof. Narasimha Kaulgud, Dr.Salila Hegde, Prof. ASHWINI D S and Prof. NITESH KHATOKAR

Congratulations to the winners:
Track 1: Sampreeth G R and team
 Track 2: C N Veeresh and team
 Track 3: Pranav Maruti Shanbhag and team
 Track 4: Daivik I Vinayaka and team
🎖 Special Awards:
Advaith Shankar Bhat and team
Harshitha Belavadi Manjunath and team
A S Gouthami and team
Nidhishree and team

A big thanks to all the participants, mentors, event coordinators, student volunteers who made this event a grand success! Here's to more innovation and excellence from the bright minds of NIE Mysuru! 
This is one of the Best Practices in ECE department to bridge the gap between academia & industry🌟
        </p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_facultycoordinator-niesymposium2025-deccterous-activity-7332984861730754561-WXS6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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

const Idt2 = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/idt2.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Design Thinking Project Exhibition - 14th June 2025 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          🌟 SPARK: Design Thinking Project Exhibition 2025 🌟
 💡✨ Innovative Solutions from the Engineers of Tomorrow! 💡✨
The Department of Electronics & Communication Engineering, in association with the DECCTEROUS IC Design Club, proudly organized a one-day Student Development Program (SDP) titled “SPARK: Design Thinking Project Exhibition” for second-semester ECE students of NIE, Mysore. This event is part of the department’s Best Practices in Teaching and Learning process.
📅 Date: 14th June 2025
 📍 Venue: NIE Mysore South Campus
 🕘 Time: From 9:30 AM onwards
🎓 Faculty Coordinator: Dr. Remya Jayachandran , Assistant Professor, ECED

👨‍⚖️ Esteemed Judges:
Dr. Dr. Rohit K. Mathew– Department of EEE
Prof. ASHWINI D S – Department of ECE

🏢 Industry Experts:
Ms. Shreya B Raj – Application Engineer, ALSTOM, NIE ECE-2024 Batch
Mr. VINAY K GOWDA – Research Intern, IISc Bangalore, NIE ECE-2025 Batch
Mr. yogesh L. – Design Engineer, Infrastructure Power Supply, ALSTOM, NIE ECE- 2024 Batch

👩‍🔬👨‍🔧 Project Topics from First-Year ECE Students:
1. eCycle Hero – India’s Smart E-Waste and Plastic Disposal System
2. Grain Quantity Maintenance System
3. Passive Solar Tracking System
4. Optimized Irrigation Based on Weather Data
5. Smart Irrigation for Precision Farming
6. Bio-Slurry Production and Management
7. Footstep-Powered Electricity Generation
8. Hybrid Solar + Piezoelectric Tiles for Energy Harvesting
9. Bag Left Open Reminder
10. Grey Water Management System

Each student team enthusiastically presented their design thinking-based projects with functional prototypes, showcasing creativity, technical skills, and real-world problem-solving abilities.

🙌 A Big Thanks to all student participants for their energy, innovation, and commitment. We look forward to seeing these ideas evolve and scale up in the future! Congratulations to the winners for their consistent performance and team work in all the evaluation stages.
🙏 Special thanks to NIE- TLC for continuously encouraging and supporting the Best Practices in Teaching and Learning Process. It plays a key role in nurturing a culture of creativity and hands-on learning.
🙏 🎉 Heartfelt gratitude to my students — Shreya B Raj, VINAY K GOWDA , and yogesh L. — for returning as evaluators and inspiring the next generation. Your contribution and mentorship truly made a difference!
        </p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_spark2025-innovation-eceatnie-activity-7340260726487269379-riwO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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
const Bridge = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/bridge.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Bridge the gap-Basic circuits analysis-27th September 2025 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          ✨ Knowledge Sharing Platform by DECCTEROUS IC Design Club ✨

ICDC successfully organized the program "Bridging the Gap – A Journey through Basic Circuits and Analysis" on 27th September 2025 for third-semester ECE students.
The session focused on basic diode circuits and their analysis, aiming to strengthen students’ fundamentals in electronic circuit analysis and prepare them for competitive exams and placements.
💡 Highlights:
Engaging discussions on diode-based circuits
Active problem-solving sessions
Participation from 27 enthusiastic students
We are excited to announce that the second session will be conducted in October, diving into advanced-level concepts with simulations.
A big thanks to all the participants for your energy and active engagement!</p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_knowledgesharing-icdesign-circuitanalysis-activity-7378643489238069249-ohzP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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
const Open= () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/open.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Open Book exam(7th sem)-29th September 2025 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          💡 Learning through Brainstorming Activity
As part of the elective subject Mixed-Signal Circuit Design, we conducted an open-book exam with a unique approach to encourage teamwork and higher-order thinking.
📘 Exam Structure:
Topics: Sample & Hold Circuits, Comparators, Charge Pumps, and gm/Id methodology for analog design.
Question Level: L3 & L4 design-oriented problems.
Format: 10 questions in total; students solved any 4 within 40 minutes.
Teams of 3 students (total 7 teams) collaborated using class notes and textbooks (hard copies only). Online resources were restricted to encourage original thinking.

🎯 Objective:
 To build problem-solving skills through team-based learning, pushing students to apply design concepts at higher levels.

📊 Follow-up:
 An online quiz at a basic level was also conducted to reinforce fundamentals.
✨ Students from the 7th semester ECE (21 out of 22 students) actively engaged, discussed, and collaborated—making the session a great example of best practices in teaching and learning to enhance technical skills. This is an initiative from Deccterous NIE ICDC student club. !</p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_ece-mixedsignaldesign-teamlearning-activity-7378458196857815040-69vK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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
const Open1= () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/open1.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Open Book exam(3rd sem)-17th October 2025 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
          Learning through understanding themselves how much you actually learned

Open book Exam was conducted for third semester ECE students for the subject Network Analysis, first module- kvl, kcl, Mesh, Nodal etc. 

Two questions were given in L3 level, students can use any method to find the current and voltages. Students can use materials in hardcopy to refer. No mobile phones, no discussion with others. 
45 minutes to complete the two questions. Additionally two questions were given as bonus questions for those who complete the exam before 30 minutes. 

This is conducted to make the students realize how much they understood the concept. In regular class and tutorial most of them solve the questions as they are guided either by faculty or by their friends. 

This open book exam was to encourage the thought process, realize the need for systematic approach, practice as many as possible. 

62/67 participated in this open book. 

This is one of the best practices adopted to encourage the students learning process. </p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_learning-through-understanding-themselves-activity-7386351118890700800-6k20?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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
const Intro= () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/intro.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Intro to Circuits-13th & 14th November 2025 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
         ✨IC Design Club, in association with the Department of Electronics & Communication Engineering, successfully conducted “INTRO TO CIRCUITS” on 13 & 14 November 2025 at GJB!✨

This two-day technical event was specially designed for 1st and 2nd year EC students who are curious to explore how circuits truly work — from fundamentals to simulation and real-time problem-solving.
🔹 Day 1: Foundations & LTSpice Simulation
Students were introduced to the basics of circuit analysis through Kirchhoff’s Laws, followed by a detailed, hands-on session on LTSpice, one of the most essential simulation tools used by electronics engineers worldwide.
Participants also received exclusive LTSpice example circuits and guided simulation files, enabling them to continue practicing and building confidence even after the workshop.
🔹 Day 2: Competition & Skill Test
The second day featured an engaging quiz-style challenge, where students applied Day 1 concepts, solved circuit problems, and showcased their analytical and logical thinking skills. The competitive spirit, teamwork, and enthusiasm displayed by the participants made the event even more exciting with winners earning recognition and prizes. 
A heartfelt thank you to our faculty coordinators, Dr. Remya Jayachandran and Dr. Ashok K, and to our student coordinators, for making this event a success.
And a special appreciation to all the participants for their energy, curiosity, and active engagement throughout the two days.</p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/deccterous-nie_icdesignclub-icdc-introtocircuits-ugcPost-7395142506797133824-KXa_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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
const How= () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/how.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title"> How Does Your Computer Remember Things?-15th November 2025 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
         ✨ How Does Your Computer Remember Things? – A Hands-On Memory Session! ✨

The IC Design Club, in association with the Department of ECE, successfully conducted a technical session on Memory Fundamentals and Bitcell Design on 15th November 2025 at NRN.

Led by Mr. Shiva Shankar L, Associate Design Engineer (Memory Design) at Insemi Technology Services Pvt Ltd, the workshop gave students valuable insights into how memory cells store data, bitcell operation, and real-world VLSI design practices. 💾⚡

The event saw enthusiastic participation from 1st and 2nd-year EC students, creating a collaborative and curiosity-driven learning environment. 🌟

Special thanks to our faculty coordinators Dr. Remya Jayachandran and Dr. Ashok K for their continuous support and guidance. 

</p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/deccterous-nie_icdcnie-memorydesign-bitcelldesign-ugcPost-7395480772012511232-Ihfk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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
const Mixed= () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/mixedtech.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Mixed Signal Innovate 2025-8th and 9th November 2025 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
         The Deccterous NIE IC Design Club successfully organized “Mixed Signal Innovate 2025”, a Technical Paper Presentation, in collaboration with the Department of Electronics and Communication Engineering, NIE Mysuru, on 8th and 9th December 2025.

This event was conducted as part of Experiential Learning in the elective course Mixed Signal Circuit Design, offered to ECE students by Dr. Remya Jayachandran. The design project was structured in a stage-wise manner, with intermediate internal evaluations, enabling students to progressively develop their understanding and analytical skills.

Paper topics were selected directly from the course syllabus, allowing students to carry out in-depth analysis of mixed-signal circuits and strengthen their conceptual and practical knowledge.

The final evaluation was carried out by external evaluators from industry, who are alumni of NIE currently working in core companies. Their expert feedback provided valuable industry perspective to the students.

This initiative stands as a best practice aimed at enhancing the teaching–learning process through outcome-based and experiential pedagogy.

We sincerely thank Mr. Charan M S and Ms. Bhumika Y for accepting our invitation and serving as External Evaluators from Industry.

Winners – Mixed Signal Innovate 2025 (Paper Presentation):
 🏆 Shalini K S and Shraddha S
Special Award:
 ⭐ Chaitra R and Nishchitha

Big thanks to our student coordinator SANJAY S HANCHINAL and Bheema Kashyapa Sharma Divana for organizing this event. 

I'm really grateful to my dear students for taking up Mixed Signal Circuit Design as an elective and participating actively in TLP. The winners were awarded with a cash prize of Rs. 1200/- and Special award Rs. 500/- as a token of appreciation which is sponsored by our Alumni. 
Best wishes dear students, hope you had a great learning experience.
</p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_the-deccterous-nie-ic-design-club-successfully-activity-7405581049038045184-Veb5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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
const Poster= () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/poster_network.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title"> Experiential Learning Activity in Network Analysis -3rd January 2026 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
        ✨ Experiential Learning Activity in Network Analysis (ECE – III Semester) ✨
Network Analysis is a core course offered in the third semester of the ECE program and forms a strong foundation for Electronics and Communication Engineering. A solid understanding of circuit analysis is crucial for students to effectively grasp advanced subjects in the ECE domain.
With the objective of strengthening fundamentals and bridging theory with practice, a structured Experiential Learning (EL) activity was designed and implemented in an outcome-oriented manner.
📌 Implementation Highlights:
 At the beginning of the semester, students were clearly briefed about the EL evaluation pattern and expectations. The activity was executed in three well-defined phases:
🔹 Phase 1: Theoretical analysis of assigned problem statements followed by verification using simulation tools.
 🔹 Phase 2: Concept explanation through hardware demonstrations and application-based validation.
 🔹 Phase 3 (Final Evaluation): Comprehensive assessment involving theoretical analysis, simulation, hardware-based proof of concept, verification and validation, application development, and preparation of innovative digital posters for documentation and presentation.
👥 Participation & Mentoring:
18 student teams worked on four problem statements, with each problem handled by 4–5 teams.
To encourage peer learning and leadership, five senior student mentors from the fifth semester ECE guided the teams, with one mentor assigned per problem statement.
🎓 Evaluation:
 The final evaluation was conducted by industry experts (alumni) and academic professionals, ensuring a balanced, rigorous, and industry-relevant assessment process.
🌟 Outcomes:
 This pilot implementation of experiential learning yielded highly encouraging results:
Significant improvement in students’ performance in Test-2
Enhanced conceptual clarity, teamwork, and problem-solving skills
Remarkable creativity and technical depth are reflected in the digital posters
🙏 I sincerely acknowledge the support of NIE Teaching Learning Centre (TLC) and the Department of ECE for promoting innovative teaching–learning practices. Student feedback was overwhelmingly positive, and evaluators appreciated the depth of understanding demonstrated through proof-of-concept implementations, application validation, and effective senior–junior mentoring.
Evaluators: Charan M S, Sangeetha A Shayana, VINAY K GOWDA, Sahana B, Dr. Ashok K, Smrithi Vijayan, Dr. Haseena
Student Volunteers: Usman,Sinchana, Vaishnavi, Sudeep, Nikhil, Jeevan, Pavan
Student Coordinators: Bheema Kashyapa Sharma Divana, Jayesh Gidwani, HN Rashmitha, DISHA N BHUSHANA 
This initiative reaffirmed the value of experiential learning in strengthening fundamentals and fostering collaborative, application-driven learning in engineering education.
</p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_networkanalysis-ece-outcomebasededucation-activity-7415667133088493568-uGhm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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
const Icpack= () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="menu-item-card">
      <img
        className="menu-item-image"
        src="/events_images/icpack.jpg"
        alt="Quiz Poster"
      />
      <h3 className="menu-card-title">Technical Talk on Power Management IPs – LDO Design, followed by Hands-On IC Packaging Session using ANSYS-28th November 2025 </h3>
      {showMore && (
        <p style={{ padding: '0 16px', fontSize: '0.95rem', color: '#333' }}>
        he Decterous IC Design Club proudly hosted an exciting and power-packed technical event:
“Technical Talk on Power Management IPs – LDO Design, followed by Hands-On IC Packaging Session using ANSYS”
on 28th November 2025

This event offered the perfect blend of theory and practical exposure for students passionate about VLSI, Chip Design, Electronics, and Core Engineering.
The session featured an insightful industry talk by Mr. Kashyap Bellur, Director, IP2SoC, Bangalore, who shared his expertise on Power Management IPs and the applications of CMOS LDOs in FPGA systems. His deep industry experience provided participants with valuable real-world understanding of modern power solutions.
This was followed by a hands-on IC Packaging simulation workshop using ANSYS, led by Dr. Remya Jayachandran, Faculty, Department of ECE, NIE. Participants gained practical exposure to IC packaging workflows, boosting their technical confidence and design skills.
We extend our heartfelt thanks to the NIE Management for their continuous encouragement and support in conducting such impactful technical events.

A special appreciation to our student coordinators Bheema Kashyapa Sharma Divana and SANJAY S HANCHINAL H for their efforts in organizing the event. A special thanks to Dr. Ashok K, faculty coordinator and ECE Department for the encouragement and support. 
Finally, we thank all the participants for their enthusiasm and active involvement, which made the event a grand success!

</p>
      )}
      <div className="readmore-container">
          {showMore && (
          <a
            href="https://www.linkedin.com/posts/dr-remya-jayachandran-6b8aab1b3_the-decterous-ic-design-club-proudly-hosted-activity-7402884643974234112-SGCx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEanTRIB3vU16u2GeeIMEtdfsqTNGgpCqk4"
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


const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="events-section">
      <h1 className="events-heading">EVENTS</h1>
      <div className="tabs">
        <button className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`} onClick={() => setActiveTab('upcoming')}>Upcoming Events</button>
        <button className={`tab-button ${activeTab === 'present' ? 'active' : ''}`} onClick={() => setActiveTab('present')}>Present Events</button>
        <button className={`tab-button ${activeTab === 'past' ? 'active' : ''}`} onClick={() => setActiveTab('past')}>Past Events</button>
        
      </div>

      {activeTab === 'upcoming' && (
  <div className="tab-placeholder">
    <p>🚀 Stay tuned! Upcoming events will be announced soon.</p>
  </div>
)}



        {activeTab === 'present' && (
  <div className="tab-placeholder">
    <p>⏳ No present events going on right now.</p>
  </div>
)}

       {activeTab === 'past' && (
  <>
    
    <div className="conducted-events-grid">
      <Poster/>
      <Mixed/>
      <Icpack/>
      <How/>
      <Intro/>
      <Open1/>
      <Open/>
      <Bridge/>
      <Idt2 />
      <Symposium />
      <Explearn/>
      <Wie />
      <Armtrain />
      <Analog />
      <Posterdesign />
      <Careerguidance />
      <Cadence />
      <Print />
      <Orientation />
      <Pcb />
      <Idt />
      <InaugurationCard />
      <QuizCard />
    </div>
   
  </>
)}

        
      </div>
    
  );
};

export default Events;