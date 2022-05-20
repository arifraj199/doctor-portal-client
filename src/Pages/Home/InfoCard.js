import React from "react";

const InfoCard = ({img,cardTitle,cardText,cardBg}) => {
  return (
    <div class={`card card-side bg-base-100 shadow-xl ${cardBg}`}>
      <figure>
        <img
        className="pl-4"
          src={img}
          alt="Movie"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
