import { Component } from 'react';
import PropTypes from 'prop-types';


class AddComputer extends Component {
	constructor(props) {
		super(props);

		this._onChange = this._onChange.bind(this);
		this._onSubmit = this._onSubmit.bind(this);

		this.state = {
			name: props.name,
			model: props.model,
			serie: props.serie,
			price: props.price
		};
	};

	_onChange(e) {
		const target = e.currentTarget;
		this.setState({ [target.name]: target.value });
	};

	_onSubmit(e) {
		e.preventDefault();
		this.props.onSave(this.state);
	};

	render() {
		const { name, model, serie, price } = this.state;

		return (
			<form onSubmit={ this._onSubmit }>
				<div>
					<label htmlFor="name">Nombre:</label>
					<input type="text" name="name" value={ name } onChange={ this._onChange } />
				</div>

				<br />

				<div>
					<label htmlFor="model">Modelo:</label>
					<input type="text" name="model" value={ model } onChange={ this._onChange } />
				</div>

				<br />

				<div>
					<label htmlFor="serie">Serie:</label>
					<input type="text" name="serie" value={ serie } onChange={ this._onChange } />
				</div>

				<br />

				<div>
					<label htmlFor="price">Precio:</label>
					<input type="text" name="price" value={ price } onChange={ this._onChange } />
				</div>

				<div>
					<button type="submit">Guardar</button>
				</div>
			</form>
		)
	};
};

AddComputer.defaultProps = {
	name: "",
	model: "",
	serie: "",
	price: ""
};

AddComputer.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	serie: PropTypes.string,
	price: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	onSave: PropTypes.func
};

export default AddComputer;