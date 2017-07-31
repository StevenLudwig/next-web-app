import { Component } from 'react';
import ListComputers from '../components/ListComputers';
import service from '../api.service';


class Home extends Component {
	render() {
		return (
			<div>
				<h3>Computadoras en inventario</h3>
				<ListComputers computers={ this.props.computers } />
				<button onClick={ () => {
					return window.location.href = "/add";
				} }>Agregar uno nuevo</button>
			</div>
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