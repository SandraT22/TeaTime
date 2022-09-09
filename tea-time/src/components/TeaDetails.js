import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea } = props;

  if (tea.quantity !== "0") {
    return (
      <React.Fragment>
        <h1>TeaDetail</h1>
        <h3>{tea.name}</h3>
        <p><em>Price: {tea.price}</em></p>
        <p>Quantity Available: {tea.quantity}</p>
        <hr/>
      </React.Fragment>
    );
  } else {
    return <p>{tea.name} is not available</p>;
  }
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
};

export default TeaDetail;