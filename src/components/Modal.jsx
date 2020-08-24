import React from 'react';
import App from '../App';

class Modal extends React.Component {

 
    showHideClassName = this.props.show ? "modal display-block modal fade" : "modal display-none modal fade";

 
    render() {
        return (
            <div className={this.showHideClassName} id="addEmployeeModal" tabIndex="-1" role="dialog" aria-labelledby="addEmployeeModal"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pt-3 pb-2">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
                            <button onClick={this.props.handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="form-row ">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Name</label>
                                        <input name="name" onChange={this.props.handleInputChange} value={this.props.name} type="text" className="form-control" id="" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Gender</label>
                                        <select name="gender" onChange={this.props.handleInputChange} value={this.props.gender} className="form-control" id="exampleFormControlSelect1">
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">       
                                        <label htmlFor="" className="mb-1">Age</label>
                                        <input name="age" onChange={this.props.handleInputChange} value={this.props.age} type="text" className="form-control" id="" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Designation</label>
                                        <input name="designation" onChange={this.props.handleInputChange} value={this.props.designation} type="text" className="form-control" id="" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Department</label>
                                        <input name="department" onChange={this.props.handleInputChange} value={this.props.department} type="text" className="form-control" id="" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="" className="mb-1">Joining Date</label>
                                        <input name="date" onChange={this.props.handleInputChange} value={this.props.date} type="date" className="form-control" id="" placeholder="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
                            <button  onClick={this.props.HandleSave} className="btn btn-success btn-sm" data-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;