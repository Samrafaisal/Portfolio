import React from "react";
import tech from "C:/Users/Home/portfolio/src/Images/tech.png";
import CV from "C:/Users/Home/portfolio/src/components/Samra Faisal CV.pdf"

function RCV() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        position: "relative",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "30%",
          [`${mediaQuery('max-width', 768)}`]: {
            width: "100%",
          },
        }}
      ></div>
      <div
        style={{
          backgroundColor: "dodgerblue",
          width: "70%",
          [`${mediaQuery('max-width', 768)}`]: {
            width: "100%",
          },
        }}
      ></div>
      <img
        src={tech}
        alt="Tech-example"
        style={{
          position: "absolute",
          top: 15,
          left: 550,
          width: 580,
          height: 580,
          [`${mediaQuery('max-width', 768)}`]: {
            width: "50%",
            height: "50%",
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 200, 
          left: 100, 
          [`${mediaQuery('max-width', 768)}`]: {
            position: "relative",
            top: 0,
            left: 0,
          },
        }}
      >
        <p style={{ fontSize: 30, marginBottom: 20, fontFamily: 'Arches' }}>
          Let's have a quick review of <br/> the CV/Resume
        </p>
        <a 
        href={CV}
        download="Samra Faisal CV.pdf"
          style={{
            backgroundColor: "dodgerblue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            [`${mediaQuery('max-width', 768)}`]: {
              fontSize: 20,
              padding: "5px 10px",
            },
          }}
        >
          Download CV/Resume
        </a>
      </div>
    </div>
  );
}

export default RCV;

function mediaQuery(property, value) {
  return `@media (max-width: ${value}px)`;
}
