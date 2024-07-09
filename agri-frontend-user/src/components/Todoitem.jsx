import React from "react";

const TodoItem = ({
//   name,
  img,
  title,
  description,
  price,
  userdetail,
  id,
}) => {
  return (
    <div className="container">
      <div>
        <img src={img} alt="" srcSet="" />
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{price}</p>
        <p>{userdetail}</p>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default TodoItem;