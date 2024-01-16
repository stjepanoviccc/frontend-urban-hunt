const API_BASE_URL = 'http://localhost:3000';

export const API_REGISTER_PATH = '/auth/register';
export const API_LOGIN_PATH = '/auth/login';
export const API_DEACTIVATE_USER_PATH = '/deactivateUser';
export const API_ACTIVATE_USER_PATH = '/activateUser';
export const API_FIND_ALL_USERS_PATH = '/findAllUsers';
export const API_FIND_ALL_GUESTS_PATH = '/findAllGuests';

export const API_ENDPOINTS = {
  REGISTER_USER: `${API_BASE_URL}${API_REGISTER_PATH}`,
  LOGIN: `${API_BASE_URL}${API_LOGIN_PATH}`,
  DEACTIVATE_USER: `${API_BASE_URL}${API_DEACTIVATE_USER_PATH}`,
  ACTIVATE_USER: `${API_BASE_URL}${API_ACTIVATE_USER_PATH}`,
  FIND_ALL_USERS: `${API_BASE_URL}${API_FIND_ALL_USERS_PATH}`,
  FIND_ALL_GUESTS: `${API_BASE_URL}${API_FIND_ALL_GUESTS_PATH}`,
};