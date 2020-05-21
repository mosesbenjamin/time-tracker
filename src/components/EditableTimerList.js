import React from 'react';
import EditableTimer from './EditableTimer'

class EditableTimerList extends React.Component {
	render(){
		return(
			<div id="timers">
				<EditableTimer
					title="Learn React"
					project="Web dev"
					elapsed="200"
					runningSince={null}
					editFormOpen={false}
				 />
				 <EditableTimer 
				 	title="Learn Angular"
					project="Web dev"
					elapsed="120"
					runningSince={null}
					editFormOpen={true}
				 />
			</div>
			)
	}
}

export default EditableTimerList;