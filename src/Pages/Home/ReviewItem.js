import React from "react";

const ReviewItem = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <div className="card-body">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
          velit quo. Voluptates quia hic aspernatur. Minus quidem eligendi qui
          repudiandae a quisquam alias harum nesciunt at, eaque id ipsum?
          Architecto?
        </p>
        <div className="flex items-center mt-4">
          <div className="avatar">
            <div className="w-16 rounded-full mr-4 ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} />
            </div>
          </div>
          <div>
            <h2 className="card-title">{review.name}</h2>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
