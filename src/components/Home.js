import React, { Component } from "react";
import img2 from "C:/Users/Home/portfolio/src/Images/portrait.png";

export class Home extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            marginBottom: 200,
            '@media (max-width: 768px)': {
              height: '60vh',
            },
            
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "60px",
                  margin: 0,
                  fontFamily: "'Mangilio', serif",
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                  '@media (max-width: 768px)': {
                    fontSize: '40px',
                  },
                }}
              >
                A Web Developer <br /> Samra Faisal
              </h1>
              <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
                Frontend Web Designing and Developing
              </p>
            </div>
            <div
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                backgroundImage:
                  "radial-gradient(circle at 50% 100%, #ffb3b3, #ffcccc, #ffe6e6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                '@media (max-width: 768px)': {
                  width: '200px',
                  height: '200px',
                },
              }}
            >
              <img
                src={img2}
                alt="Samra Faisal"
                style={{
                  width: "250px",
                  height: "350px",
                  borderRadius: "45%",
                  objectFit: "cover",
                  '@media (max-width: 768px)': {
                    width: '180px',
                    height: '250px',
                  },
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
