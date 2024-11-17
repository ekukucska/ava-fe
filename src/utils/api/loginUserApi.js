import { API_BASE_URL } from '../../constants/apiConstants';

const loginUserApi = async (email, password) => {
  const apiUrl = `${API_BASE_URL}/auth/login`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Login failed');
    }

    const data = await response.json();
    return data; // This should include the token if the login is successful
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }
};

export default loginUserApi;
