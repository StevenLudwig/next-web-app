import { polyfill } from 'es6-promise';
polyfill();
import fetch from 'isomorphic-fetch';

const api_uri = 'http://localhost:5005/v2/';

module.exports = (function() {
	return {
		get(source) {
			return fetch(api_uri.concat(source));
		},

		post(source, data) {
			return fetch(api_uri.concat(source), {
				method: 'POST',
				body: JSON.stringify(data),
				mode: 'no-cors',
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			});
		}
	};
})();