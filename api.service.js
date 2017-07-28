import axios from 'axios';


const service = (function() {
	const slash = '/';

	const base = function() {
		return axios.create({
			baseURL: 'http://localhost:5005/v2/',
			timeout: 3600,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		});
	};

	return {
		get(source) {
			return base().get(slash.concat(source));
		},

		post(source, data) {
			return base().post(slash.concat(source), data);
		}
	};
})();


module.exports = service;