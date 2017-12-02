import ExecuteApiCall from './api_client';

export function fetchHomeMessage() {
  return ExecuteApiCall('get', 'home/test');
}
