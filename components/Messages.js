import { Component } from 'react';

class Item extends Component {
	render() {
		return <li>{ this.props.children }</li>
	}
};


class Messages extends Component {
	render() {
		const { items } = this.props;

		return (
			<ul>
			{
				items.map((item, i) => {
					return <Item key={ i }>{item}</Item>
				})
			}
			</ul>
		)
	};
};

export default Messages;