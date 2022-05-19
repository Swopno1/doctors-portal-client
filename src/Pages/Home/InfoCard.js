import React from "react";

const InfoCard = ({ cardTitle, cardText, img, className }) => {
  return (
    <div className={`${className} card lg:card-side shadow-xl`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-white">{cardTitle}</h2>
        <p className="text-white">{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
