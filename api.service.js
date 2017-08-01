import 'isomorphic-unfetch';


const service = (function() {
	const uri = 'http://localhost:5005/';
	const version = 'v2';

	const base = function(resource) {
		return uri + version + '/' + resource;
	};

	return {
		get(source) {
			return fetch(base(source));
		},

		post(source, data) {
			return fetch(base(source), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify(data)
			});
		},

		'delete': (source) => {
			return fetch(base(source), {
				method: 'DELETE'
			});
		},

		put(source, data) {
			return fetch(base(source), {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify(data)
			});
		}
	};
})();


module.exports = service;