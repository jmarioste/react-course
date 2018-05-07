import React from "react";

import { Link } from "react-router-dom";
const ExpenseListItem = ({description, amount, createdAt, id}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      

      <ul>
        <li> amount : {amount}</li>
        <li> date added : {createdAt}</li>
      </ul>
    </div>
  )
}

export default ExpenseListItem;