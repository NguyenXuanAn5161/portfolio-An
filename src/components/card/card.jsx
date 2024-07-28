import React from "react";
import { FiDatabase } from "react-icons/fi";

const Card = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        borderRadius: "10px",
      }}
    >
      <div className="icon">
        <FiDatabase />
      </div>
      <div className="title">
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
      </div>
      <p>Things I enjoy designing: UX, UI, Web, Apps, Logos</p>
      <div className="list__title">
        Design Tools: Affinity Designer Figma Pen & Paper Sketch
      </div>
      <div className="list__title">list title</div>
    </div>
  );
};

export default Card;
