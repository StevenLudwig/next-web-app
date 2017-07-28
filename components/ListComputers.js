import { Component } from 'react';

class ListComputers extends Component {
	render() {
		return (
			<div>
			{
				this.props.computers.map((computer, i) => {
					return <div key={ i }>
					{ computer.name }
					<hr />
					</div>
				})
			}
			</div>
		)
	}
};

export default ListComputers;