import { Component } from 'react';
import AddComputer from 'components/AddComputer';


class Add extends Component {
	render() {
		return (
			<div>
				<h3>Agregar a inventario</h3>
				<AddComputer redirect="/" />
			</div>
		)
	};
};

export default Add;