import React, { Component } from "react";
import icon1 from "C:/Users/Home/portfolio/src/Images/linkedin.jpg";
import icon2 from "C:/Users/Home/portfolio/src/Images/phone.jpg";
import icon3 from "C:/Users/Home/portfolio/src/Images/email.jpg";

export class Contact extends Component {
  render() {
    return (
      <>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            maxWidth: "80%",
            margin: "auto"
          }}
        >
          <div
            style={{
              fontSize: "27px",
              fontWeight: "bold",
              fontFamily: "Monaco",
              marginTop: 20,
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            Get in Touch
          </div>
          <div
            style={{
              fontSize: "22px",
              fontFamily: "Helvitica",
              marginBottom: 20,
              marginLeft: 50,
            }}
          >
            <div>
              <img
                src={icon1}
                alt="linkedin"
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 50,
                }}
              />
              <a
                href="https://www.linkedin.com/in/samra-faisal-b45905279/"
                target="_blank" rel="noreferrer"
              >
                Samra Faisal
              </a>
            </div>
          </div>
          <div
            style={{
              fontSize: "22px",
              fontFamily: "Helvitica",
              marginBottom: 20,
              marginLeft: 50,
            }}
          >
            <div>
              <img
                src={icon2}
                alt="phone"
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 50,
                }}
              />
              0341-3309324
            </div>
          </div>
          <div
            style={{
              fontSize: "22px",
              fontFamily: "Helvitica",
              marginBottom: 20,
              marginLeft: 50,
            }}
          >
            <div>
              <img
                src={icon3}
                alt="email"
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 50,
                }}
              />
              <a href="mailto:samrafaisal01@gmail.com">
                samrafaisal01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
