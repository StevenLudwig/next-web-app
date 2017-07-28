import { Component } from 'react';
import service from '../api.service';
import AddComputer from '../components/AddComputer';
import { addComputer } from '../utils/validate.computer.js';


class Home extends Component {
	async _onSave(computer) {
		var errors = addComputer(computer);
		var create = await service.post('computers', computer);
		var created = await create.json();
		console.log(created);
	};

	render() {
		return <div>
			<h3>Hola Nextjs!</h3>
			<AddComputer onSave={ this._onSave } />
		</div>
	}
};


Home.getInitialProps = async () => {
	const data = await service.get('computers');
	const computers = await data.json();

	return {
		computers: computers
	};
};

export default Home;