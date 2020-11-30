import React from "react";

const InformationCard = () => {
  let name = [];
  for (var i = 0; i <= 100; i++) {
    name.push("I am Sonali Jain.");
  }
  const Img = () => {
    return (
      <div
        style={{
          overflow: "auto",
          borderRadius: "50%",
          roundedcolor: "#eee",
          padding: 10,
        }}
      >
        <img src="../soni.jpg" alt="soni" height="100%" width="100%" />
      </div>
    );
  };
  const Education = () => {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: 42,
            padding: 10,
          }}
        >
          Education
        </div>
        <div
          style={{
            borderTop: "3px dashed #bbb",
            textAlign: "center",
          }}
        ></div>
      </div>
    );
  };
  const Experience = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //padding: 10,
          //margin: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            margin: 10,
            flexBasis: "70%",
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontFamily: "roboto",
              fontWeight: 500,
              //flex: 2,
            }}
          >
            The Boring Company
          </div>
          <div
            style={{ fontSize: 18, fontFamily: "roboto", fontStyle: "italic" }}
          >
            boringcompany.com
          </div>
          <div
            style={{
              fontSize: 20,
              fontFamily: "roboto",
              fontWeight: 500,
              paddingTop: 5,
            }}
          >
            Senior Network System Administrator
          </div>
          <div style={{ fontSize: 20, fontFamily: "roboto" }}>
            November 2017 - Present
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontFamily: "roboto",
              textAlign: "center",
              fontStyle: "italic",
              paddingTop: 20,
              //paddingLeft: 140,
            }}
          >
            Solving 21st century problems by diging holes and making game
            changing products like the *not a flamethrower*
          </div>
          <div
            style={{
              fontSize: 20,
              fontFamily: "roboto",
              paddingTop: 10,
              //paddingLeft: 140,
            }}
          >
            Every company needs its networks properly administered and The
            Boring Compay is no exception. Digging holes is hard and I play my
            part making sure the whole company stays connected. I lead a team of
            5 people and enjoy driving the company to try new technologies.
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Img />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {name}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 42,
          padding: 10,
        }}
      >
        Project
      </div>
      <div
        style={{
          borderTop: "3px dashed #bbb",
          textAlign: "center",
          // transform: "translate(0px, -220px) rotate(0deg)",
        }}
      ></div>
      <div
        style={{
          textAlign: "center",
          fontSize: 28,
          fontFamily: "roboto",
          fontWeight: "bold",
          padding: 10,
        }}
      >
        Super awesome project
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: "roboto",
          fontWeight: 400,
          padding: 10,
        }}
      >
        This is probably one of the greatest apps ever created, if you don't
        agree you're probably wrong.
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 20,
          fontFamily: "roboto",
          padding: 10,
        }}
      >
        I started this project as a way if learning React and it has since grown
        into a fully fledged app. I have learned many skills through this and
        been I’m very proud of having this in my portfolio. If you don’t have a
        project as awesome as this I would advise you make one.
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 42,
          padding: 10,
        }}
      >
        Experience
      </div>
      <div
        style={{
          borderTop: "3px dashed #bbb",
          textAlign: "center",
        }}
      ></div>
      <Experience />
      <Education />
    </div>
  );
};
export default InformationCard;
