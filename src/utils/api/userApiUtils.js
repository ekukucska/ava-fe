import { API_BASE_URL } from '../../constants/apiConstants';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
};

const getHeaders = () => ({
  'Content-Type': 'application/json',
});

const userApiUtils = {
  // Get user by email
  getUserByEmail: async (email) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/users/by-email/${email}`,
        {
          method: 'GET',
          headers: getHeaders(),
        }
      );
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  // Create new user with optional name fields
  createUser: async (email, password, options = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/create`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
          email,
          password,
          firstName: options.firstName || '',
          lastName: options.lastName || '',
        }),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  // Update user names
  updateUserNames: async (email, firstName, lastName) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/users/update-names-by-email`,
        {
          method: 'PATCH',
          headers: getHeaders(),
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
  deleteUser: async (email) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/users/delete-by-email`,
        {
          method: 'DELETE',
          headers: getHeaders(),
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
