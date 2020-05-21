import React from 'react';

class Timer extends React.Component {

	hour = (value)=>{
		const second = Number(value)
		if (second > 3600){
			const hour = Math.ceil(second/3600)
			return (hour)
		}
		else {
			return(0)
		}
	}
	minutes = (value)=>{
		const second = Number(value)
		const minutes = Math.ceil(second/60)
		return (minutes)
	}
	second = (value)=>{
		const time = Number(value)
		const second = Math.ceil(time/21600)
		return (second)
	}

	render(){
		const hour = this.hour(this.props.elapsed)
		const minutes = this.minutes(this.props.elapsed)
		const second = this.minutes(this.props.elapsed)
		return (
				<div className='ui centered card'>
					<div className='content'>
						<div className='header'>
							{this.props.title}
						</div>
					</div>	
					<div className='meta' style={{marginLeft: "10px"}}>
						{this.props.project}
					</div>
					<div className='center aligned description'>
						<p>
						{hour} {"hr "}
						{minutes} {"m "}
						{second} {"s"}
						</p>
					</div>
					<div className='extra content'>
						<span className='right floated edit icon'>
							<i className='edit icon' />
						</span>
						<span className='right floated trash icon'>
							<i className='trash icon' />
						</span>
					</div>
					<div className='ui bottom attached blue basic button'>
						Start
					</div>
				</div>
			);
		}
}
export default Timer;