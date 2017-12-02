import axios from 'axios';

export default function ExecuteApiCall(method, endpoint, payload={}) {
  const serverURL = location.origin;
  const userParam = location.search.split('user=')[1];

  let options = {
    method: method,
    url: `${serverURL}/${endpoint}`,
    params: {},
    data: {}
  }

  if (userParam) {
    Object.assign(options.params, {user: userParam});
  }
  switch (method) {
    case 'post' || 'put':
      Object.assign(options, {data: payload});
      break;
    case 'get':
      Object.assign(options.params, payload);
      break;
  }

  return axios(options);
}
