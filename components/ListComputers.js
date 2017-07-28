import { Component } from 'react';

class ListComputers extends Component {
	render() {
		return (
			<div>
			{
				this.props.computers.map((computer, i) => {
					return (
						<div key={ i }>
							<div>
								<div style={{ display: 'inline' }}>{ computer.name }</div>
								<div style={{ display: 'inline', marginLeft: '40%' }}>
									<a href={ "/computers/" + computer._id }>Ver detalle</a>
								</div>
							</div>
							<hr/>
						</div>
					)
				})
			}
			</div>
		)
	}
};

export default ListComputers;