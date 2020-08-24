import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import CardBody from './components/CardBody';
import Table from './components/Table';
import Modal from './components/Modal';
class App extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  state = {
    id:0,
    name: '',
    gender: '',
    age: '',
    designation: '',
    department: '',
    date: '',
    isChecked:true,
    items: []

  };
  handleInputChange = (event) => {
    this.setState({

      [event.target.name]: event.target.value

    });
  }
  HandleSave = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      id: this.state.id,
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age,
      designation: this.state.designation,
      department: this.state.department,
      date: this.state.date,
      isChecked:true
    });

    this.setState((prev)=>({

      id:prev.id +1,
      name: '',
      gender:'', 
      age: '',
      designation: '',
      department:'',
      date: '',
      isChecked:true,
      items


    }));
  }
 
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          <CardBody />
          <Table items={this.state.items}  />
        </Container>
        <Modal HandleSave={this.HandleSave} handleInputChange={this.handleInputChange} name={this.state.name} gender={this.state.gender} age={this.state.age} designation={this.state.designation} department={this.state.department} date={this.state.date} show={this.state.show} handleClose={this.hideModal}></Modal>
      </div>
    );
  }
}

export default App;
