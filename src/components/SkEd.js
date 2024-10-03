import React from "react";

const ProfilePage = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    flexWrap: "wrap"
  };

  const leftColumnStyle = {
    flex: "1",
    paddingRight: "20px",
    textAlign: "justify",
    flexBasis: "50%",
    maxWidth: "100%"
  };

  const rightColumnStyle = {
    flex: "2",
    paddingLeft: "20px",
    borderLeft: "1px solid #ddd",
    flexBasis: "50%",
    textAlign: "justify",
    maxWidth: "100%"
  };

  const profileInfoStyle = {
    marginBottom: "20px",
  };

  const skillBarContainerStyle = {
    marginBottom: "15px",
    marginRight: "0px",
  };

  const skillLabelStyle = {
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const skillBarStyle = (widthPercentage) => ({
    height: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    overflow: "hidden",
    marginBottom: "10px",
  });

  const skillBarFillStyle = (widthPercentage) => ({
    height: "100%",
    width: `${widthPercentage}%`,
    backgroundColor: "#007bff",
  });

  const headingStyle = {
    marginBottom: "10px",
    fontSize: 35,
    fontFamily: "Times New Roman",
  };

  const aboutMeTextStyle = {
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      {/* Left Column */}
      <div style={leftColumnStyle}>
        <div style={profileInfoStyle}>
          <p style={headingStyle}> My Skills </p>
          <p />
          With proficiency in{" "}
          <b>
            <u>JavaScript (ES6+), HTML, CSS and React</u>
          </b>
          , I am skilled in building dynamic and interactive web applications.
          Leveraging React for efficient front-end development and NodeJS for
          server-side applications, I ensure smooth integration across
          platforms. Familiarity with Git for version control and npm/yarn for
          package management enables seamless project workflow. Additionally, I
          utilize Bootstrap to create responsive designs, ensuring that
          applications perform optimally across devices and screen sizes.
        </div>

        <div>
          <p style={headingStyle}>Skill</p>
          {/* Skill HTML */}
          <div style={skillBarContainerStyle}>
            <p style={skillLabelStyle}>HTML 85%</p>
            <div style={skillBarStyle(85)}>
              <div style={skillBarFillStyle(85)}></div>
            </div>
          </div>

          {/* Skill CSS3 */}
          <div style={skillBarContainerStyle}>
            <p style={skillLabelStyle}>CSS3 75%</p>
            <div style={skillBarStyle(75)}>
              <div style={skillBarFillStyle(75)}></div>
            </div>
          </div>

          {/* Skill PHP */}
          <div style={skillBarContainerStyle}>
            <p style={skillLabelStyle}>ReactJS 70%</p>
            <div style={skillBarStyle(70)}>
              <div style={skillBarFillStyle(70)}></div>
            </div>
          </div>

          {/* Skill JavaScript */}
          <div style={skillBarContainerStyle}>
            <p style={skillLabelStyle}>JavaScript 80%</p>
            <div style={skillBarStyle(80)}>
              <div style={skillBarFillStyle(80)}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div style={rightColumnStyle}>
        <p style={headingStyle}>My Education</p>
        <p style={aboutMeTextStyle} />
        My educational journey has been a transformative experience that has
        shaped me into the individual I am today. From a young age, I was
        fascinated by the world of learning and was driven to pursue knowledge
        in various fields. <br /> <br /> I completed my primary and secondary
        education with distinction, which laid a strong foundation for my future
        academic pursuits. During my time in school i was also an active person
        in sports. <br /> <br /> I then went on to pursue a Bachelor's degree in
        Software Engineering, where I was exposed to a wide range of subjects
        and had the opportunity to explore my interests in depth. Throughout my
        undergraduate studies, I was actively involved in various activities,
        including{" "}
        <b>
          <u>
            {" "}
            Class Presentation, Debates, attending different workshops that are
            of interest{" "}
          </u>
        </b>
        , which helped me develop valuable skills such as teamwork,
        communication, and problem-solving. <br /> <br />
        My academic achievements and experiences have not only equipped me with
        a strong theoretical foundation but have also instilled in me a passion
        for lifelong learning and a desire to continue growing and evolving as a
        professional.
      </div>
    </div>
  );
};


export default ProfilePage;
