import { Component } from 'react';
import service from 'api.service';


class ComputerDetail extends Component {
	render() {
		const { computer } = this.props;

		return (
			<div>
			{
				Object.keys(computer).map((k, i) => {
					return (
						<div key={ i }>
							{ `${ k }: ${ computer[k] }` }
						</div>
					)
				})
			}
				<div>
					<input type="text" name="name" placeholder="Nombre" />
					<input type="text" name="email" placeholder="Correo electrónico" />
					<textarea name="" name="review" id="" cols="30" rows="10" maxLength="100"></textarea>
					<div>
						<button>Enviar mi comentario</button>
						<button>Me gusta</button>
						<button>No me gusta</button>
					</div>
				</div>

				<button onClick={ () => {
					window.location.href="/";
				} }>Regresar a inventario</button>
			</div>
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