import { Component } from 'react';
import ListComputers from 'components/ListComputers';
import service from 'api.service';
import MainLayout from 'layouts/Main';


class Home extends Component {
	render() {
		return (
			<MainLayout>
				<div>
					<h3>Computadoras en inventario</h3>
					<ListComputers computers={ this.props.computers } />
					<button onClick={ () => {
						return window.location.href = "/add";
					} }>Agregar uno nuevo</button>
				</div>
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