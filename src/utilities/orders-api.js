import sendRequest from './send-request.js';

const BASE_URL = '/api/saveCartItems';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}