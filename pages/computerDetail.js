import { Component } from 'react';
import service from 'api.service';
import MainLayout from 'layouts/Main';
import { Row, Col, Button,
	Form, FormControl, FormGroup,
	ControlLabel, Panel
} from 'react-bootstrap';
import update from 'react-addons-update';


class ComputerDetail extends Component {
	constructor(props) {
		super(props);

		this._onChange = this._onChange.bind(this);
		this._onSubmit = this._onSubmit.bind(this);

		this.state = {
			computer: props.computer,
			review: {}
		};
	};

	_onChange(e) {
		const target = e.currentTarget;

		this.setState(update(this.state, {
			review: {
				[target.name]: { $set: target.value }
			}
		}));
	};

	async _onSubmit(e) {
		e.preventDefault();

		var { _id } = this.state.computer;
		const comments = this.state.computer.comments;
		comments.push(this.state.review);

		const res = await service.put(`computers/${ _id }`, { comments });
		const computer = await res.data;
		this.setState({ computer: computer });
	}

	render() {
		const { computer } = this.state;

		return (
			<MainLayout>
				<Row>
					<Col xs={ 12 }>
						<FormGroup>
							<ControlLabel>Nombre:</ControlLabel>
							{ ' ' + computer.name }
						</FormGroup>

						<FormGroup>
							<ControlLabel>Modelo:</ControlLabel>
							{ ' ' + computer.model }
						</FormGroup>

					</Col>

					<Col xs={ 12 } sm={ 6 } md={ 2 }>
						<Button bsStyle="success" block onClick={ () => {
							return window.location.href="/";
						} }>Home</Button>
					</Col>
				</Row>

				<Row>
					<Col xs={ 12 }>
						<h3>Dejar mi comentario</h3>
					</Col>
				</Row>

				<Row>
					<Col xs={ 12 }>
						<Form onSubmit={ this._onSubmit }>
							<FormGroup>
								<ControlLabel>Nombre:</ControlLabel>
								<FormControl name="username" onChange={ this._onChange } />
							</FormGroup>

							<FormGroup>
								<ControlLabel>Correo electrónico:</ControlLabel>
								<FormControl name="email" onChange={ this._onChange } />
							</FormGroup>

							<FormGroup>
								<ControlLabel>Comentarios:</ControlLabel>
								<FormControl name="review" componentClass="textarea" onChange={ this._onChange } />
							</FormGroup>

							<FormGroup>
								<Button type="submit" bsStyle="primary">Enviar mi comentario</Button>
							</FormGroup>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs={ 12 }>
						<Panel bsStyle="primary">
						<h4>Comentarios de otros usuarios</h4>
						{
							this.state.computer.comments.map((comment, i) => {
								return <Row key={ i }>
									<Col xs={ 12 }>{ comment.review }</Col>
								</Row>
							})
						}
						</Panel>
					</Col>
				</Row>
			</MainLayout>
		)
	}
};

ComputerDetail.getInitialProps = async ({ req }) => {
	const { computer_id } = req.params;
	const res = await service.get(`computers/${ computer_id }`);
	const computer = await res.data;

	return {
		computer: computer
	};
};

export default ComputerDetail;