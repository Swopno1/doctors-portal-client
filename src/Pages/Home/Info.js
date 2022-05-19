import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        className="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
        cardText="Click the button to listen on Spotiwhy app."
        img={clock}
      />
      <InfoCard
        className="bg-accent"
        cardTitle="Visit our location"
        cardText="Brooklyn, NY 10036, United States"
        img={marker}
      />
      <InfoCard
        className="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact us now"
        cardText="+000 123 456789"
        img={phone}
      />
    </div>
  );
};

export default Info;
