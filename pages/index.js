import { Component } from 'react';
import AddComputer from '../components/AddComputer';
import service from '../api.service';


class Home extends Component {
	render() {
		return <div>
			<h3>¡Llegó una nueva computadora!</h3>
			<AddComputer />
		</div>
	}
};


Home.getInitialProps = async () => {
	const data = {};

	const retrieve_computers = await service.get('computers');

	data.computers = await retrieve_computers.data;
	return data;
};

export default Home;