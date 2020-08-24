import React from 'react';
import TableRow from './TableRow';
class Table extends React.Component {


	

	render() {
		
		return (
			<div className="table-responsive mt-3 mt-md-4 mb-2">
				<table className="table table-bordered" >
					<thead>
						<tr>
							<th>Name</th>
							<th>Department</th>
							<th>Available</th>
							<th>View Details</th>
						</tr>
					</thead>
					<tbody>
						<TableRow items={this.props.items} />
						

					</tbody>
				</table>
			</div>
		)
	}
}

export default Table;