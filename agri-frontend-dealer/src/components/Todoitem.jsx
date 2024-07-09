import React from "react";

const TodoItem = ({
  img,
  title,
  description,
  price,
  id
}) => {
  return (
    <div className="container">
      <div>
        <img src={img} alt="" srcset="" />
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default TodoItem;