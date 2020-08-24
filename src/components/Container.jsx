import React from 'react';

function Container(props){
    return(
        <div className="container-fluid">
		<div className="row">
			<div className="col-12">
				<div className="question-dashboard">
                        {props.children[0]}
                        {props.children[1]}
					</div>

            </div>
        </div>
        </div>
    )
}

export default Container;