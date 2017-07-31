import { Component } from 'react';
import AddComputer from 'components/AddComputer';
import MainLayout from 'layouts/Main';


class Add extends Component {
	render() {
		return (
			<MainLayout>
				<h3>Agregar a inventario</h3>
				<AddComputer redirect="/" />
			</MainLayout>
		)
	};
};

export default Add;