import { API_BASE_URL } from '../../constants/apiConstants';

export async function fetchAggregatedSubjects() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/aggregatedSubjects`);
    if (!response.ok) {
      throw new Error('Failed to fetch aggregated subjects');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching aggregated subjects:', error);
    throw error;
  }
}
