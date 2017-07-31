import { Component } from 'react';
import ListComputers from 'components/ListComputers';
import service from 'api.service';
import MainLayout from 'layouts/Main';
import { Button } from 'react-bootstrap';


class Home extends Component {
	render() {
		return (
			<MainLayout>
				<h3>Computadoras en inventario</h3>

				<ListComputers computers={ this.props.computers } />

				<Button bsStyle="success" onClick={ () => {
					return window.location.href = "/add";
				} }>Agregar nuevo</Button>
			</MainLayout>
		)
	}
};


Home.getInitialProps = async () => {
	const data = {};

	const retrieve_computers = await service.get('computers');
	data.computers = await retrieve_computers.data;

	return data;
};

export default Home;