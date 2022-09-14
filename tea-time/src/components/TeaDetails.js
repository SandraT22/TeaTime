import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete } = props;

  if (tea.quantity !== "0") {
    return (
      <React.Fragment>
        <h1>TeaDetail</h1>
        <h3>{tea.name}</h3>
        <p><em>Price: {tea.price}</em></p>
        <p>Quantity Available: {tea.quantity}</p>
        <button onClick={()=> onClickingDelete(tea.id) }>Close Tea</button>
        <button onClick={ props.onClickingEdit }>Update Ticket</button>
        <hr/>
      </React.Fragment>
    );
  } else {
    return <p>{tea.name} is not available</p>;
  }
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default TeaDetail;