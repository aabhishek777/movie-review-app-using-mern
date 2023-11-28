
import { api } from '../api/baseApi';

export const loadUser = (authToken) => {
  try {
    return api.get('user/is-auth', {
      headers: { Authorization: `Bearer ${authToken}` },
    });
  } catch (error) {
    console.log(error);
  }
};
