import { Component } from 'react';
import PropTypes from 'prop-types';
import { addComputer } from '../utils/validate.computer.js';
import service from 'api.service';
import Messages from './Messages';
import update from 'react-addons-update';
import { Form, FormControl, FormGroup, ControlLabel, Button, Alert } from  'react-bootstrap';


class AddComputer extends Component {
	constructor(props) {
		super(props);

		this._onChange = this._onChange.bind(this);
		this._onSubmit = this._onSubmit.bind(this);

		this.state = {
			computer: {
				name: props.computer.name,
				model: props.computer.model,
				serie: props.computer.serie,
				price: props.computer.price,
			},
			errors: []
		};
	};

	_onChange(e) {
		const target = e.currentTarget;
		this.setState({
			computer: update(this.state.computer, {
				[target.name]: { $set: target.value }
			})
		});
	};

	async _onSubmit(e) {
		e.preventDefault();

		const { computer } = this.state;
		const errors = addComputer(computer);

		if (errors.length) {
			this.setState({ errors });
			return;
		};

		const save = await service.post('computers', computer);
		if (save.status == 201) {
			const saved = save.data;
			const message = `La ${ saved.name } ahora existe en inventario`;

			var clean_computer_attrs = {};

			Object.keys(computer).map(k => {
				clean_computer_attrs[k] = '';
			});

			this.setState({ computer: clean_computer_attrs, errors: [message] }, () => {
				setTimeout(() => {
					window.location.href = this.props.redirect;
				}, 3000);
			});
		};
	};

	render() {
		const { name, model, serie, price } = this.state.computer;

		return (
			<Form onSubmit={ this._onSubmit }>
				<FormGroup>
				{
					this.state.errors.length ? <Alert bsStyle="danger">
						<Messages items={ this.state.errors } />
					</Alert> : null
				}

				</FormGroup>

				<FormGroup>
					<ControlLabel>Nombre:</ControlLabel>
					<FormControl name="name" value={ name } onChange={ this._onChange } />
				</FormGroup>

				<FormGroup>
					<ControlLabel>Modelo:</ControlLabel>
					<FormControl name="model" value={ model } onChange={ this._onChange } />
				</FormGroup>

				<FormGroup>
					<ControlLabel>Serie:</ControlLabel>
					<FormControl name="serie" value={ serie } onChange={ this._onChange } />
				</FormGroup>

				<FormGroup>
					<ControlLabel>Precio:</ControlLabel>
					<FormControl name="price" value={ price } onChange={ this._onChange } />
				</FormGroup>

				<FormGroup>
					<Button type="submit" bsStyle="danger">Guardar</Button>
				</FormGroup>
			</Form>
		)
	};
};

AddComputer.defaultProps = {
	computer: {
		name: "",
		model: "",
		serie: "",
		price: ""
	},
	errors: []
};

AddComputer.propTypes = {
	computer: PropTypes.shape({
		name: PropTypes.string,
		model: PropTypes.string,
		serie: PropTypes.string,
		price: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]),
	})
};

export default AddComputer;