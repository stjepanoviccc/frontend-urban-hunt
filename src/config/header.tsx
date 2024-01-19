const accessToken = localStorage.getItem('accessToken');

export const header = {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  },
}