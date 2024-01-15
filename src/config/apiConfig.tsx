const API_BASE_URL = 'http://localhost:3000';

export const API_REGISTER_PATH = '/auth/register';
export const API_FIND_ALL_USERS_PATH = '/findAllUsers';
export const API_FIND_ALL_GUESTS_PATH = '/findAllGuests';

export const API_ENDPOINTS = {
  REGISTER_USER: `${API_BASE_URL}${API_REGISTER_PATH}`,
  FIND_ALL_USERS: `${API_BASE_URL}${API_FIND_ALL_USERS_PATH}`,
  FIND_ALL_GUESTS: `${API_BASE_URL}${API_FIND_ALL_GUESTS_PATH}`,
};