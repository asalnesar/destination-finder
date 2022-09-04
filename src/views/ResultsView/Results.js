import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../App.css";
import ResultInfo from "./components/ResultInfo";

export const Results = ({ results }) => {
  return (
    <div
      style={{ padding: "10px 0", height: "100%", overflow: "hidden" }}
      className="clearfix"
    >
      <p style={{ textAlign: "left" }}>Best destinations for you:</p>
      <div style={{ overflow: "auto", height: "90%" }}>
        <Accordion>
          {results?.map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                {index + 1}. {item.region}
              </Accordion.Header>
              <Accordion.Body>
                <ResultInfo result={item} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};