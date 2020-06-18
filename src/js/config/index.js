import { ENV_NAME } from '../constants/Environment';

export const ENVIRONMENT = ENV_NAME.DEVELOP;

const SERVER_URL = [
  'https://dev-api.fifties-hacker.com/api/',
  'https://test-api.fifties-hacker.com/api/',
  'https://stg-api.fifties-hacker.com/api/',
  'https://stg-api.fifties-hacker.com/api/',
];
export const API = SERVER_URL[ENVIRONMENT];

export const COPYRIGHT = '© 2019 luc888.co';

export const KEY_JWT = 'FtMcx2FSQKscjbcBHaT4';
export const ENABLE_CHANGE_LANGUAGE = true;
export const ENABLE_LOGIN = true;
