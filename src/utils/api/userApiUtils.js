import { API_BASE_URL } from '../../constants/apiConstants';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
};

const getHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`, // Add token in Authorization header
});

const userApiUtils = {
  // Get user by email
  getUserByEmail: async (token, email) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/users/by-email/${email}`,
        {
          method: 'GET',
          headers: getHeaders(token),
        }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  // Update user names
  updateUserNames: async (token, email, firstName, lastName) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/users/update-names-by-email`,
        {
          method: 'PATCH',
          headers: getHeaders(token),
          body: JSON.stringify({
            email,
            firstName,
            lastName,
          }),
        }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error updating user names:', error);
      throw error;
    }
  },

  // Delete user
  deleteUser: async (token, email) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/users/delete-by-email`,
        {
          method: 'DELETE',
          headers: getHeaders(token),
          body: JSON.stringify({ email }),
        }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },
};

export default userApiUtils;
