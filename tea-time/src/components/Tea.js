import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.name}</h3>
        <p><em>{props.price}</em></p>
        <p>{props.quantity}</p>
        <p>{props.status}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string,
  status: PropTypes.string.isRequired,
  id: PropTypes.string, 
  whenTicketClicked: PropTypes.func
};

export default Tea;