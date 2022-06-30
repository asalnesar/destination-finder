import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Attribute from "./Attribute";

const COLORS = [
  "#FE900C",
  "#16B0B2",
  "#04A2DF",
  "#F05E67",
  "#952D97",
  "#3C764D",
  "#FFCD4D",
  "#251351",
  "#C62828",
];
export const CustomizationContainer = ({ userData, setUserData }) => {
  return (
    <div>
      {Object.keys(userData.Attributes).map((item, index) => (
        <div
          style={{
            backgroundColor: COLORS[index % COLORS.length],
            borderRadius: "100",
            color: "#fff",
            textAlign: "left",
            padding: "0 5px",
            margin: "5px 0 0 0",
          }}
          key={index}
        >
          <Attribute
            attrName={item}
            userData={userData}
            setUserData={setUserData}
          />
        </div>
      ))}
    </div>
  );
};
