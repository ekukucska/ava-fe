import { API_BASE_URL } from '../../constants/apiConstants';

const getHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`, // Add token in Authorization header
});

export async function fetchAggregatedSubjects(token) {
  const url = `${API_BASE_URL}/api/aggregatedSubjects`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: getHeaders(token),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching aggregated subjects:', error);
    throw error;
  }
}
