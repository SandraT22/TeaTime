import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import TeaDetail from './TeaDetails';
import Button from 'react-bootstrap/Button';

class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTeaList: [],
      selectedTea: null,
      editing: false
    };
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleDeletingTea = (id) => {
    const newMainTeaList = this.state.mainTeaList.filter(tea => tea.id !== id);
    this.setState({
      mainTeaList: newMainTeaList,
      selectedTea: null
    });
  }

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: selectedTea});
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({mainTeaList: newMainTeaList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
  if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false
    });
  } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }
}

// handleIncrement = (id) => {
//   const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
//   if (selectedTea.qantity > 0) {
//     let updatedTea = selectedTea.quantity += 1;
//     const newMainTeaList = this.state.mainTeaList;
//     this.setState({
//       selectedTea: updatedTea
//     })

//   } else {
//     selectedTea.quantity;
//   }
// }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail tea = {this.state.selectedTea} onClickingDelete = {this.handleDeletingTicket} />
      buttonText = 'Return to Tea List';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList} />
      buttonText = 'Return to Tea List';
    } else {
      currentlyVisibleState = <TeaList teaList={this.state.mainTeaList}
      onTeaSelection={this.handleChangingSelectedTea} />;
      // onClickingIncrement={this.handleIncrement}
      buttonText = "Add Tea";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="outline-warning" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }

}

export default TeaControl;