/**
  Public API: https://github.com/Hipo/university-domains-list
*/

export const API_BASE_URL: string = 'http://universities.hipolabs.com';
export const PATH_SEARCH: string = '/search';

export type University = {
  alpha_two_code: string;
  domains: string[];
  country: string;
  'state-province': string;
  web_pages: string[],
  name: string;
};

export type QueryResult = University[];
