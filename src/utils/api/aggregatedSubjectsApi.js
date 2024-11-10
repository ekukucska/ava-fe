export async function fetchAggregatedSubjects() {
  try {
    const response = await fetch(
      'http://localhost:5000/api/aggregatedSubjects'
    );
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
