import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTeaForm(props){

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value, 
      price: event.target.price.value, 
      quantity: event.target.quantity.value,
      status: event.target.status.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTeaFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Pair Name' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='quantity'
          placeholder='Quantity' />
        <input
          type='text'
          name='status'
          placeholder='Status' />
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};


export default NewTeaForm;