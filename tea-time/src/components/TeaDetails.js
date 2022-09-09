import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea } = props;

  return (
    <React.Fragment>
      <h1>TeaDetail</h1>
      <h3>{tea.name}</h3>
      <p><em>{tea.price}</em></p>
      <p>{props.quantity}</p>
      <p>{props.status}</p>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
};

export default TeaDetail;