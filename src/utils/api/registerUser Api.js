import { API_BASE_URL } from '../../constants/apiConstants';

const registerUser = async (email, password) => {
  const apiUrl = `${API_BASE_URL}/auth/register`;

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
      throw new Error(errorData.msg || 'Failed to register user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error registering user:', error.message);
    throw error;
  }
};

export default registerUser;
