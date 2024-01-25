const API_BASE_URL = 'http://localhost:3000';

export const API_REGISTER_PATH = '/auth/register';
export const API_LOGIN_PATH = '/auth/login';
export const API_FIND_ALL_REAL_ESTATES_PATH = '/findAllRealEstates';
export const API_FIND_ALL_REAL_ESTATES_FILTERED_PATH = '/findAllRealEstatesFiltered';
// guest
export const API_CREATE_TOUR_PATH = '/createTour';
export const API_SEND_LIKE = '/sendLike';
export const API_CHECK_IS_LIKED = '/checkIsLiked';
// admin
export const API_DEACTIVATE_USER_PATH = '/admin/deactivateUser';
export const API_ACTIVATE_USER_PATH = '/admin/activateUser';
export const API_FIND_ALL_USERS_PATH = '/admin/findAllUsers';
export const API_CREATE_NEW_OWNER_PATH = '/admin/createNewOwner';
// owner
export const API_FIND_AGENCY_BY_OWNER_ID_PATH = '/owner/findAgencyByOwnerId';
export const API_FIND_OWNER_BY_ID_PATH = '/owner/findOwnerById';
export const API_FIND_REAL_ESTATES_BY_OWNER_ID_PATH = '/owner/findAllRealEstatesByOwnerId';
export const API_FIND_MOST_POPULAR_REAL_ESTATES_BY_AGENCY_ID_PATH = '/owner/findMostPopularRealEstatesByAgencyId';
export const API_CREATE_AGENCY_PATH = '/owner/createAgency';
export const API_CREATE_AGENT_PATH = '/owner/createAgent';
export const API_DELETE_AGENT_PATH = '/owner/deleteAgent';
export const API_FIND_AGENTS_BY_AGENCY_ID_PATH = '/owner/findAllAgentsByAgencyId';
export const API_FIND_MOST_POPULAR_AGENTS_BY_AGENCY_ID_PATH = '/owner/findMostPopularAgentsByAgencyId';
// agent
export const API_FIND_REAL_ESTATE_BY_ID_PATH = '/agent/findRealEstateById';
export const API_FIND_REAL_ESTATES_BY_AGENT_ID_PATH = '/agent/findAllRealEstatesByAgencyId';
export const API_FIND_AGENCY_BY_AGENT_ID_PATH = '/agent/findAgencyByAgentId';
export const API_ADD_NEW_REAL_ESTATE_PATH = '/agent/createRealEstate';
export const API_EDIT_REAL_ESTATE_PATH = '/agent/editRealEstate';
// agent+owner junction
// export const API_FIND_REAL_ESTATES_BY_AGENCY_ID_PATH = '/agentAndOwner/findRealEstatesByAgencyId';
export const API_CALENDAR_ACCEPT_REQUEST_PATH = '/agentAndOwner/calendarAcceptRequest';
export const API_CALENDAR_DELETE_REQUEST_PATH = '/agentAndOwner/calendarDeleteRequest';
export const API_FIND_CALENDAR = '/agentAndOwner/findCalendar';
// agent+owner+administrator junction
export const API_REAL_ESTATE_DEACTIVATE_PATH = '/deactivateRealEstate';
export const API_REAL_ESTATE_ACTIVATE_PATH = '/activateRealEstate';

export const API_ENDPOINTS = {
  // all roles
  REGISTER_USER: `${API_BASE_URL}${API_REGISTER_PATH}`,
  LOGIN: `${API_BASE_URL}${API_LOGIN_PATH}`,
  FIND_ALL_REAL_ESTATES: `${API_BASE_URL}${API_FIND_ALL_REAL_ESTATES_PATH}`,
  FIND_ALL_REAL_ESTATES_FILTERED: `${API_BASE_URL}${API_FIND_ALL_REAL_ESTATES_FILTERED_PATH}`,
  // guest
  CREATE_TOUR: `${API_BASE_URL}${API_CREATE_TOUR_PATH}`,
  SEND_LIKE: `${API_BASE_URL}${API_SEND_LIKE}`,
  CHECK_IS_LIKED: `${API_BASE_URL}${API_CHECK_IS_LIKED}`,
  // admin role
  DEACTIVATE_USER: `${API_BASE_URL}${API_DEACTIVATE_USER_PATH}`,
  ACTIVATE_USER: `${API_BASE_URL}${API_ACTIVATE_USER_PATH}`,
  FIND_ALL_USERS: `${API_BASE_URL}${API_FIND_ALL_USERS_PATH}`,
  CREATE_NEW_OWNER: `${API_BASE_URL}${API_CREATE_NEW_OWNER_PATH}`,
  // owner role
  FIND_OWNER_BY_ID: `${API_BASE_URL}${API_FIND_OWNER_BY_ID_PATH}`,
  FIND_AGENCY: `${API_BASE_URL}${API_FIND_AGENCY_BY_OWNER_ID_PATH}`,
  FIND_REAL_ESTATES_BY_OWNER_ID: `${API_BASE_URL}${API_FIND_REAL_ESTATES_BY_OWNER_ID_PATH}`,
  FIND_MOST_POPULAR_REAL_ESTATES_BY_AGENCY_ID: `${API_BASE_URL}${API_FIND_MOST_POPULAR_REAL_ESTATES_BY_AGENCY_ID_PATH}`,
  CREATE_AGENCY: `${API_BASE_URL}${API_CREATE_AGENCY_PATH}`,
  CREATE_AGENT: `${API_BASE_URL}${API_CREATE_AGENT_PATH}`,
  DELETE_AGENT: `${API_BASE_URL}${API_DELETE_AGENT_PATH}`,
  FIND_AGENTS_BY_AGENCY_ID: `${API_BASE_URL}${API_FIND_AGENTS_BY_AGENCY_ID_PATH}`,
  FIND_MOST_POPULAR_AGENTS_BY_AGENCY_ID: `${API_BASE_URL}${API_FIND_MOST_POPULAR_AGENTS_BY_AGENCY_ID_PATH}`,
  // agent
  FIND_REAL_ESTATE_BY_ID: `${API_BASE_URL}${API_FIND_REAL_ESTATE_BY_ID_PATH}`,
  FIND_AGENCY_BY_AGENT_ID: `${API_BASE_URL}${API_FIND_AGENCY_BY_AGENT_ID_PATH}`,
  ADD_NEW_REAL_ESTATE: `${API_BASE_URL}${API_ADD_NEW_REAL_ESTATE_PATH}`,
  EDIT_REAL_ESTATE: `${API_BASE_URL}${API_EDIT_REAL_ESTATE_PATH}`,
  FIND_REAL_ESTATES_BY_AGENT_ID: `${API_BASE_URL}${API_FIND_AGENCY_BY_AGENT_ID_PATH}`,
  // agent+owner junction
 // FIND_REAL_ESTATES_BY_AGENCY_ID: `${API_BASE_URL}${API_FIND_REAL_ESTATES_BY_AGENCY_ID_PATH}`,
  CALENDAR_ACCEPT_REQUEST: `${API_BASE_URL}${API_CALENDAR_ACCEPT_REQUEST_PATH}`,
  CALENDAR_DELETE_REQUEST: `${API_BASE_URL}${API_CALENDAR_DELETE_REQUEST_PATH}`,
  FIND_CALENDAR: `${API_BASE_URL}${API_FIND_CALENDAR}`,
  // agent+owner+administrator junction
  REAL_ESTATE_DEACTIVATE: `${API_BASE_URL}${API_REAL_ESTATE_DEACTIVATE_PATH}`,
  REAL_ESTATE_ACTIVATE: `${API_BASE_URL}${API_REAL_ESTATE_ACTIVATE_PATH}`,
};