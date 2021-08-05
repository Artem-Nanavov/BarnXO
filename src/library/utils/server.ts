import axios from 'axios';
// require('dotenv').config();

// const { server_api } = require('../../../config/main');

export default axios.create({
	baseURL: 'https://opencart3-simple.api.opencart-api.com/api/rest',
	headers: {
		'X-Oc-Merchant-Id': 123,
	},
});
