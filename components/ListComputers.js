import { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import service from 'api.service';

const ButtonRemove = ({ _id }) => {
	const _onRemove = async () => {
		const removed = await service.delete(`computers/${ _id }`);
	};

	return <Button bsStyle="danger" onClick={ _onRemove }>
		<i className="fa fa-trash-o" />
	</Button>;
};


class ListComputers extends Component {
	render() {
		return (
			<Row>
				<Col xs={ 12 }>
				{
					this.props.computers.map((computer, i) => {
						return (
							<div key={ i }>
								<Row>
									<Col xs={ 4 } lg={ 3 }>
										{ computer.name }
									</Col>
									<Col xs={ 4 } lg={ 4 }>
										<Button bsStyle="default" onClick={ () => {
											return window.location.href = "/computers/" + computer._id;
										} }>
											<i className="fa fa-eye" />
										</Button>
									</Col>
									<Col xs={ 2 } lg={ 2 }>
										<Button bsStyle="warning">
											<i className="fa fa-pencil" />
										</Button>
									</Col>
									<Col xs={ 2 } lg={ 2 }>
										<ButtonRemove { ...computer } />
									</Col>
								</Row>
								<hr />
							</div>
						)
					})
				}
				</Col>
			</Row>
		)
	}
};

ListComputers.propTypes = {
	computers: PropTypes.array
};

export default ListComputers;