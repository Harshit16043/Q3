import React from 'react';
import Modal from './Modal';
class TableRow extends React.Component {

 state={
    a:0
 }
    handleCheckbox = (items) => {
        console.log(items);
       
       
       
    }
  
    render() {
     
        return (

      
                this.props.items.map((item) => {
            
                    return (
                        <tr key={item.name}>

                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"
                                    checked={this.state.isChecked} onChange={()=>this.handleCheckbox(this.props.items)} />
                                <label className="custom-control-label" htmlFor="customCheck1"></label>
                            </div>
                        </td>
                        <td>
                            <button  type="button" className="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal">
                                <i className="fa fa-edit"></i>&nbsp; Edit
                        </button>
                            <button type="button" className="btn btn-outline-danger btn-sm">
                                <i className="fa fa-trash"></i>&nbsp; Delete
                        </button>
                        </td>

                        </tr>
                        )
                })
           
              
        )
      
      


    }
}

export default TableRow;