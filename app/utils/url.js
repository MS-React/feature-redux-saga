import queryString from 'query-string';

export function getQuery(url = '') {
  return queryString.parse(url);
}
