import axios from 'axios';
import { AIRTABLE_API_KEY, AIRTABLE_API_URL } from 'astro:env/server';

export async function fetchAirtable(filter = '', sort = []) {
  try {
    const response = await axios.get(AIRTABLE_API_URL, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
      params: {
        filterByFormula: filter,
        sort: sort.map(field => ({ field, direction: 'asc' })), // Change 'asc' to 'desc' if needed
      },
    });
    return response.data.records;
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    return [];
  }
}
