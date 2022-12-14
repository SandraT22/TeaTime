import React from 'react';
import Tea from './Tea';
import PropTypes from "prop-types";

function TeaList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.teaList.map((tea) =>
        <Tea 
          whenTeaClicked = { props.onTeaSelection }
          name={tea.name}
          price={tea.price}
          quantity={tea.quantity}
          id={tea.id}  
          key={tea.id}/> 
      )}
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
};

export default TeaList;