const API_BASE_URL = 'http://localhost:3000';

export const API_REGISTER_PATH = '/auth/register';
export const API_LOGIN_PATH = '/auth/login';
// admin
export const API_DEACTIVATE_USER_PATH = '/admin/deactivateUser';
export const API_ACTIVATE_USER_PATH = '/admin/activateUser';
export const API_FIND_ALL_USERS_PATH = '/admin/findAllUsers';
export const API_CREATE_NEW_OWNER_PATH = '/admin/createNewOwner';
// owner
export const API_FIND_AGENCY_BY_OWNER_ID_PATH = '/owner/findAgencyByOwnerId';
export const API_FIND_OWNER_BY_USERNAME_PATH = '/owner/findOwnerByUsername';
export const API_CREATE_AGENCY_PATH = '/owner/createAgency';
export const API_FIND_AGENT_BY_AGENCY_ID_PATH = '/owner/findAgentByAgencyId';

export const API_ENDPOINTS = {
  // all roles
  REGISTER_USER: `${API_BASE_URL}${API_REGISTER_PATH}`,
  LOGIN: `${API_BASE_URL}${API_LOGIN_PATH}`,
  // admin role
  DEACTIVATE_USER: `${API_BASE_URL}${API_DEACTIVATE_USER_PATH}`,
  ACTIVATE_USER: `${API_BASE_URL}${API_ACTIVATE_USER_PATH}`,
  FIND_ALL_USERS: `${API_BASE_URL}${API_FIND_ALL_USERS_PATH}`,
  CREATE_NEW_OWNER: `${API_BASE_URL}${API_CREATE_NEW_OWNER_PATH}`,
  // owner role
  FIND_OWNER_BY_USERNAME: `${API_BASE_URL}${API_FIND_OWNER_BY_USERNAME_PATH}`,
  FIND_AGENCY: `${API_BASE_URL}${API_FIND_AGENCY_BY_OWNER_ID_PATH}`,
  CREATE_AGENCY: `${API_BASE_URL}${API_CREATE_AGENCY_PATH}`,
  FIND_AGENT_BY_AGENCY_ID: `${API_BASE_URL}${API_FIND_AGENT_BY_AGENCY_ID_PATH}`
};