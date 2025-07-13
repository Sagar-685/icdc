// File: src/pages/About.jsx
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-us-page">
      {/* About Section */}
      <div className="about-us">
        <h2>ABOUT US</h2>
         <hr className="underline" />
        <div className="about-content">
          <p>
            DECCTEROUS - IC Design Club of ECE department, NIE Mysuru aims to provide
            practical knowledge as well as strong fundamentals in Electronics and Communication
            Engineering. Our mission is to prepare students for a career in the Core Domains
            by equipping them with cutting-edge skills and industry knowledge.
          </p>
        </div>
      </div>

      {/* Activities Section */}
      <div className="activities">
        <div className="container">
          <h2>OUR ACTIVITIES</h2>
           <hr className="underline" />
          <div className="activity-cards">
            <div className="activity-card">
              <h3>Workshops</h3>
              <p>We conduct hands-on workshops to dive deep into IC design concepts, tools, and technologies.</p>
            </div>
            <div className="activity-card">
              <h3>Projects</h3>
              <p>Innovative projects in multidisciplinary domains targeting real-world applications in semiconductor design.</p>
            </div>
            <div className="activity-card">
              <h3>Guest Lectures</h3>
              <p>Insights from industry experts on the latest trends in the semiconductor industry.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission">
        <div className="title">
          <h1>OUR MISSION</h1>
          <hr className="underline" />
        </div>
        <p>
          The mission of the Integrated Circuit Design Club is to cultivate an environment of experiential learning where members are empowered to acquire and enhance the skills necessary for a successful career in the core Electronics and Communication domain. Through hands-on projects, industry interactions, and collaborative initiatives, the club strives to nurture technical competence and innovation among its members.
        </p>
      </div>

      {/* Values Section */}
      <div className="values">
        <div className="title">
          <h1>OUR VALUES</h1>
          <hr className="underline" />
        </div>
        <div className="values-container">
          <div className="value-card"><h3>IDEATE</h3></div>
          <div className="value-card"><h3>INNOVATE</h3></div>
          <div className="value-card"><h3>CREATE</h3></div>
          <div className="value-card"><h3>PERPETUATE</h3></div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mission mt-5">
        <div className="title">
          <h1>OUR VISION</h1>
          <hr className="underline" />
        </div>
        <p>
          The Integrated Circuit Design Club envisions becoming a vibrant center of excellence in both analog and digital circuit design, providing innovative solutions for various applications. By fostering strong collaboration between industry and academia, the club aims to address the evolving needs of core industries, thereby bridging the gap and promoting technological advancements in the field.
        </p>
      </div>
    </section>
  );
};

export default About;
