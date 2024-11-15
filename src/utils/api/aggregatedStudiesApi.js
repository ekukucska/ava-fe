import { API_BASE_URL } from '../../constants/apiConstants';

export async function fetchAggregatedStudies() {
  const url = `${API_BASE_URL}/api/aggregatedStudies`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch aggregated studies:', error);
    throw error;
  }
}
