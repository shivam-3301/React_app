import React from "react";
import Back from "../Common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import Awrapper from "../About/Awrapper";
import "../About/about.css";

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default Team;
